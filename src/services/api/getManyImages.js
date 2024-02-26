import api from "./api";

const getManyImages = async () => {
    try {
        const jsonForms = ({})
        const response = await api.post("/many/nsfw/neko", jsonForms)
        console.log(response)
        return response.data.files

    } catch (err) {
        console.error("Houve um erro ao buscar as imagens", err)
    }
}

export default getManyImages