/*
    * This is an example plugin file, if you plan on making a plugin, you can start off here.
    * For further information, you can check out the documentation at: https://docs.vencord.dev/plugins/#

    * If you are copying this link from the example and have no intentions of making a plugin, delete this folder.
*/

import { Devs } from "@utils/constants";
import definePlugin from "@utils/types";

export default definePlugin({
    name: "CoolPlugin",
    description: "description",
    authors: [Devs.Ethan],
});
