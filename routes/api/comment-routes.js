const router = require('express').Router();
const { getAllComments, addComment, removeComment } = require('../../controllers/comment-controller');

router.route('/:pizzaId').post(addComment);
router.route('/:pizzaId/:commentId').delete(removeComment);
router.route('/').get(getAllComments);



module.exports = router;