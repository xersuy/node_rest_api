const express = require('express');
const router = express.Router();

const util = require('./index');

/**
 * @swagger
 *   /api/test/:
 *    get:
 *      tags:
 *       - test
 *      description: users test api
 *      produces:
 *      - applicaion/json
 *      parameters:
 *        - in: body
 *          name:
 *          description:
 *          schema:
 *            type:
 *            required:
 *
 *
 *      responses:
 *       200:
 *        description: 사용가능
 */
router.get('/', (req, res) => {
  if (true) {
    return res.json(util.successFalse({message: 'false.'}));
  } else {
    return res.json(util.successTrue({message: 'success.'}));
  }
});

module.exports = router;
