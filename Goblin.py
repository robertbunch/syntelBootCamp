# Make Goblin a child/subclass
from Character import Character
class Goblin(Character):
	def __init__(self):
		# we use the super! the super method is teh same
		# as running the parents __init__ method
		super(Goblin,self).__init__('Goblin',6,2);
	def doALittleDance(self):
		print "The goblin has done a dance. You are mezmerized."
