import * as tuitsDao from '/controllers/tuits/tuits-dao'

const createTuit = async (req, res) => {
    const newTuit = req.body;
    newTuit.likes = 0;
    newTuit.liked = false;

    newTuit.replies = 0
    newTuit.retuits = 0
    newTuit.username = "NASA"
    newTuit.handle = "@nasa"
    newTuit.time = "now"
    newTuit.image = "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/NASA_logo.svg/2449px-NASA_logo.svg.png"

    const insertedTuit = await tuitsDao.createTuit(newTuit)
    res.json(insertedTuit);
}

const findTuits = async (req, res) => {
    const tuits = await tuitsDao.findTuits();
    res.json(tuits);
}

const updateTuit = async (req, res) => {
    const tuitIdToUpdate = req.params['tid'];
    const updates = req.body;
    const status = await tuitsDao.updateTuit(tuitIdToUpdate, updates);
    res.json(status);
}


const deleteTuit = async (req, res) => {
    const tuitIdToDelete = req.params['tid'];
    const status = await tuitsDao.deleteTuit(tuitIdToDelete)
    res.json(status);
}



export default (app) => {
    app.post('/api/tuits', createTuit);
    app.get('/api/tuits', findTuits);
    app.put('/api/tuits/:tid', updateTuit);
    app.delete('/api/tuits/:tid', deleteTuit);
}

