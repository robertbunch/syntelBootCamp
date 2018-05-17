# the class takes as a param the parent class
class Character(object):
	def __init__(self,name,health,power):
		self.name=name;
		self.health=health;
		self.power=power;
	def take_damage(self,ammountOfDamage):
		self.health -= ammountOfDamage;
	def is_alive(self):
		return self.health > 0;
