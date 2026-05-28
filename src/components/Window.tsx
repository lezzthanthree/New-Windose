interface WindowProps {
    title: string;
    children?: React.ReactNode;
}

export const Window = (prop: WindowProps) => {
    const { title, children } = prop;

    return (
        <div className="absolute border-2 border-nso-purple bg-nso-cyan px-1 pt-1 box-border flex flex-col shadow-[4px_4px_#4d23cf55] min-w-64 min-h-64">
            <div className="flex flex-row items-center bg-nso-light-pink border-2 border-nso-purple box-border font-nso-dinkie-9px align-middle text-nso-purple text-[16px]/[0.5em] p-1 gap-1">
                <div className="bg-nso-purple min-h-4 min-w-4" />
                <span className="w-full align-middle">{title}</span>
                <div className="flex gap-1">
                    <div className="bg-nso-purple min-h-4 min-w-4" />
                    <div className="bg-nso-purple min-h-4 min-w-4" />
                    <div className="bg-nso-purple min-h-4 min-w-4" />
                </div>
            </div>
            <div className="bg-white border-2 border-nso-purple my-1 border-box flex flex-col flex-1">
                {children}
            </div>
            <div className="flex flex-row">
                <div className="h-2 w-8 bg-nso-dark-pink border-2 border-b-0 border-box border-nso-purple" />
                <div className="h-1.5 w-1.5 bg-nso-cyan border-2 border-nso-purple border-box ml-0.5" />
                <div className="h-1.5 w-1.5 bg-nso-cyan border-2 border-nso-purple border-box ml-0.5" />
                <div className="h-1.5 w-1.5 bg-nso-cyan border-2 border-nso-purple border-box ml-0.5" />
            </div>
        </div>
    );
};
