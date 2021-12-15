const { Campus, Student } = require('../models');

const seedDB = async () => {
	const dummy_campus = await Campus.create({
		name: "Hunter College",
		description: "This is a school in NYC.",
		address: "This is certainly an address.",
		imageUrl: "https://previews.123rf.com/images/mikegreen/mikegreen1609/mikegreen160900089/67292768-school-building-icon-silhouette-vector-illustration.jpg"
	});
	const dummy_campus2 = await Campus.create({
		name: "Harvard",
		description: "This is a school in MA.",
		address: "This is certainly an address.",
		imageUrl: "https://previews.123rf.com/images/mikegreen/mikegreen1609/mikegreen160900089/67292768-school-building-icon-silhouette-vector-illustration.jpg"
	});

	const dummy_student = await Student.create({
			firstname: "Joe",
      lastname: "Shmo",
	  email: "Joe@Shmo",
	  imageUrl: "https://www.artworksprojects.org/wp-content/uploads/2020/06/Silhouette-Portrait-Male-520-x-576.png"
		});

	await dummy_student.setCampus(dummy_campus);
	
}

module.exports = seedDB;