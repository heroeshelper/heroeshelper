import { getAssetUrl } from "@heroeshelper/utils/assets";
import Image from "./Image";

type Props = React.ComponentProps<"img"> & {
    src: string;
};

const AssetImage = (props: Props) => {
    const url = getAssetUrl(props.src);

    return <Image {...{ ...props, src: url }}></Image>;
};

export default AssetImage;
