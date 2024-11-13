function skillsMember(){
  var member = {
    name: "John",
    age: 20,
    skills: ["JavaScript", "HTML", "CSS"],
    getSkills: function(){
      return this.skills;
    }
  };
  return member.getSkills();
}