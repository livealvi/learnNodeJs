const router = require("express").Router();

const {
  getAllConnect,
  getSingleConnect,
  createContact,
  updateContact,
  deleteContact,
} = require("./controllers");

router.get("/", getAllConnect);
router.get("/:id", getSingleConnect);
router.get("/delete/:id", deleteContact);
router.post("/", createContact);
router.put("/:id", updateContact);

module.exports = router;
