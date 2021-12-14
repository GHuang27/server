const { Campus, Student } = require('../models');

const seedDB = async () => {
	const dummy_campus = await Campus.create({
		name: "Hunter College",
		description: "This is a school in NYC.",
		address: "This is certainly an address."
	});
	const dummy_campus2 = await Campus.create({
		name: "Harvard",
		description: "This is a school in MA.",
		address: "This is certainly an address."
	});

	const dummy_student = await Student.create({
			firstname: "Joe",
      lastname: "Shmo",
	  email: "Joe@Shmo",
		});

	await dummy_student.setCampus(dummy_campus);
	
}

module.exports = seedDB;