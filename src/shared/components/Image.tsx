const Image = (props: React.ComponentProps<"img">) => {
    return <img loading="lazy" {...props}></img>;
};

export default Image;
