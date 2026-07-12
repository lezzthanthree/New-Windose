import React, { useDeferredValue, useEffect, useMemo, useState } from "react";
import { useSearchState } from "../../hooks/useSearch";
import SearchHistory from "./SearchHistory";
import { fuzzy } from "fast-fuzzy";

const SearchHistoryList: React.FC = () => {
    const {
        searchHistoryList,
        search: query,
        setSearch,
        setTemporary,
    } = useSearchState();
    const deferredQuery = useDeferredValue(query);
    const [selectedIndex, setSelectedIndex] = useState(0);
    const [prevQuery, setPrevQuery] = useState(deferredQuery);

    if (deferredQuery !== prevQuery) {
        setPrevQuery(deferredQuery);
        setSelectedIndex(-1);
    }

    const filteredSearch = useMemo(() => {
        if (deferredQuery.length == 0) return [];
        return searchHistoryList
            .filter((s) => {
                const confidence = fuzzy(deferredQuery, s.query);
                return confidence > 0.6;
            })
            .sort((a, b) => b.date.valueOf() - a.date.valueOf())
            .slice(0, 5);
    }, [deferredQuery, searchHistoryList]);

    useEffect(() => {
        const length = filteredSearch.length;
        if (length === 0) return;

        const event = (events: KeyboardEvent) => {
            const key = events.key;

            switch (key) {
                case "ArrowDown": {
                    events.preventDefault();
                    const nextIndex = (selectedIndex + 1) % length;

                    setSelectedIndex(nextIndex);

                    const targetItem = filteredSearch[nextIndex];
                    if (targetItem) setTemporary(targetItem.query);
                    break;
                }
                case "ArrowUp": {
                    events.preventDefault();
                    const nextIndex = (selectedIndex - 1 + length) % length;

                    setSelectedIndex(nextIndex);

                    const targetItem = filteredSearch[nextIndex];
                    if (targetItem) setTemporary(targetItem.query);
                    break;
                }
                case "Tab": {
                    const currentlySelected = filteredSearch[selectedIndex];
                    if (currentlySelected) {
                        events.preventDefault();
                        setSearch(currentlySelected.query);
                        setTemporary("");
                        setSelectedIndex(-1);
                    }
                    break;
                }
            }
        };

        document.addEventListener("keydown", event);

        return () => {
            document.removeEventListener("keydown", event);
        };
    }, [filteredSearch, selectedIndex, setTemporary, setSearch]);

    return (
        <div className="absolute flex flex-col inset-x-16 py-2">
            {filteredSearch.map((search, i) => (
                <SearchHistory
                    query={search.query}
                    date={search.date}
                    selected={selectedIndex == i}
                    key={i}
                />
            ))}
        </div>
    );
};

export default SearchHistoryList;
