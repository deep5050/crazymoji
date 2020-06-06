//@ts-check

const emojis = require("./crazymoji.json");
const titleize = require("titleize");

var getKeys = function (obj) {
  var array = [];
  for (var key in obj) {
    array.push(key);
  }
  return array;
};

/**
 * Flatter/Merge a nested array of strings
 * @module flattern
 * @param {Array<string>} nested_array - Nested array of
 *     category/sub_category
 * @returns {Array<string>} - Merged/Flatter array
 */

module.exports.flattern = (nested_array) => {
  return [].concat.apply([], nested_array);
};

/**
 * Get the RAW object containing all the emojis
 * @returns {Object} - The RAW data of all the emojis
 */

module.exports.get_raw = () => {
  return emojis;
};

/**
 * Get the list of categories of emojis
 * @module categories
 * @returns {Array} string - List of emoji categories
 */

module.exports.categories = () => {
  return getKeys(emojis);
};

/**
 * Get sub-categories of emojis
 * @module sub_categories
 * @returns {Array<string>} - List of sub categories with
 *     their parent categories
 */

module.exports.sub_categories = () => {
  var sub_categories = [];
  var categories = getKeys(emojis);
  categories.forEach((elem, index) => {
    var temp = getKeys(emojis[elem]);
    sub_categories.push(temp);
  });
  return sub_categories;
};

/**
 * Filter emojis by categories
 * @module filter_by_category
 * @param {string} category - Exact emoji category
 *     name
 * @returns {object} string - List of emojis filtered
 *     by the given category
 */

module.exports.filter_by_category = (category) => {
  const data = titleize(category).replace("Github", "GitHub");
  const categories = this.categories();
  if (categories.includes(data)) {
    return emojis[data];
  } else {
    throw new Error(`crazymoji: Category \'${data}\' not found!`);
  }
};

/**
 * Emojify an array
 * @module emojify
 * @param { Array} sub_category - The sub
 *     category
 * @returns {array} string
 */

module.exports.emojify = (sub_category) => {
  var flattern = this.flattern(sub_category);
  var text = [];
  flattern.forEach((element) => {
    text.push(`:${element.trim()}:`);
  });
  return text;
};
