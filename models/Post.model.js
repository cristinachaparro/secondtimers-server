const { Schema, model } = require("mongoose");

const postSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  country: {
    type: String,
    required: true,
    enum: [
      "Albania",
      "Andorra",
      "Armenia",
      "Austria",
      "Azerbaijan",
      "Belarus",
      "Belgium",
      "Bosnia and Herzegovina",
      "Bulgaria",
      "Croatia",
      "Cyprus",
      "Czech Republic",
      "Denmark",
      "Estonia",
      "Finland",
      "France",
      "Georgia",
      "Germany",
      "Greece",
      "Hungary",
      "Iceland",
      "Ireland",
      "Italy",
      "Kosovo",
      "Latvia",
      "Liechtenstein",
      "Lithuania",
      "Luxembourg",
      "Macedonia",
      "Malta",
      "Moldova",
      "Monaco",
      "Montenegro",
      "The Netherlands",
      "Norway",
      "Poland",
      "Portugal",
      "Romania",
      "Russia",
      "San Marino",
      "Serbia",
      "Slovakia",
      "Slovenia",
      "Spain",
      "Sweden",
      "Switzerland",
      "Turkey",
      "Ukraine",
      "United Kingdom",
      "Vatican City",
    ],
  },
  description: {
    type: String,
    required: true,
  },
  image: [
    {
      type: String,
    },
  ],
  creator: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: "User",
  },
  category: {
    type: String,
    enum: [
      "monuments",
      "nature",
      "entertainment",
      "food&drinks",
      "special corners",
    ],
  },
});

const Post = model("Post", postSchema);

module.exports = Post;
