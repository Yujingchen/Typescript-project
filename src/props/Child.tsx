// Props pass to child componentment must be exact same number of props and correct value type
interface ChildProps {
    color: string;
    onClick: () => void;
}
export const Child = ({ color, onClick }: ChildProps) => {
    return <button onClick={onClick}>Click me</button>
};

export const ChildAsFC: React.FC<ChildProps> = ({ color, onClick, children }) => {
    return <div>
        {color}
        {children}
        <button onClick={onClick}>Click me</button>
    </div>
}

ChildAsFC.displayName