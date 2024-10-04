import canalController from './controller/canalController.js'
import programaController from './controller/programaController.js'
import userController from './controller/userController.js'
import favoriteController from './controller/favoriteController.js'

export default function rotas(serv) {
    serv.use(canalController);
    serv.use(programaController);
    serv.use(userController);
    serv.use(favoriteController);
}