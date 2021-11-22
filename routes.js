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
router.post("/", createContact);
router.put("/:id", updateContact);
router.delete("/:id", deleteContact);

module.exports = router;
