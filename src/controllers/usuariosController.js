import { obtenerUsuarios } from '../persistencia/usuarios.js.js.js.js'

export const getUsuariosController = (req, res) => {
    const usuarios = obtenerUsuarios()
    res.json(usuarios)
}