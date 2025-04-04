const addRoot = (tail: string = "") => (import.meta.env.DEV ? import.meta.env.PUBLIC_DEV_ROOT_URL : import.meta.env.PUBLIC_ROOT_URL) + tail

export default addRoot