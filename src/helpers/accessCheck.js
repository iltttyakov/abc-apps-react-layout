import inArray from "./inArray";

const accessCheck = (rights, access) => {
    return inArray(rights, access)
}

export default accessCheck