const Joi = require('joi');

const input = require('./input/4').map(i => {
  if (i.byr) i.byr = +i.byr
  if (i.eyr) i.eyr = +i.eyr
  if (i.iyr) i.iyr = +i.iyr
  if (i.hgt) {
    const reg = new RegExp(/^(\d+)(cm|in)$/);
    const match = reg.exec(i.hgt)
    if (match) {
      i.hgt = {
        number: +match[1],
        unit: match[2]
      }
    }
  }
  return i
});

console.log('PART 1')
const schema1 = Joi.object({
  byr: Joi.any().required(),
  iyr: Joi.any().required(),
  eyr: Joi.any().required(),
  hgt: Joi.any().required(),
  ecl: Joi.any().required(),
  pid: Joi.any().required(),
  hcl: Joi.any().required(),
  cid: Joi.any()
});

console.log(
  input.filter(passport => !schema1.validate(passport).error).length
)

console.log('PART 2')
const schema2 = Joi.object({
  byr: Joi.number().min(1920).max(2002).required(),
  iyr: Joi.number().min(2010).max(2020).required(),
  eyr: Joi.number().min(2020).max(2030).required(),
  hgt: Joi.object({
    number: Joi.alternatives().conditional('unit', { is: 'cm', then: Joi.number().min(150).max(193), otherwise: Joi.number().min(59).max(76) }).required(),
    unit: Joi.string().pattern(/^(cm|in)$/).required()
  }).required(),
  ecl: Joi.string().pattern(/^(amb|blu|brn|gry|grn|hzl|oth)$/).required(),
  pid: Joi.string().length(9).pattern(/^[0-9]{9}$/).required(),
  hcl: Joi.string().pattern(/^#[0-9a-f]{6}$/).required(),
  cid: Joi.string()
});

console.log(
  input.filter(passport => !schema2.validate(passport).error).length
)