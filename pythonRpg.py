# Contrib Modules - stuff we had to install
# Core Modules - stuff thats already part of python, that we need
import os # operating system
from random import randint #get the randint method from the random class

# Custom modules - python modules we made!
# from FILENAME.py import CLASS/member
from Character import Character
from Goblin import Goblin

heroName = raw_input('What is thy name, brave adventurer? ');
theHero = Character(heroName,10,5);
# print theHero.name;
goblin = Goblin();
# print goblin.health;

while goblin.is_alive() and theHero.is_alive():
	print "You have %d health and %d power." % (theHero.health, theHero.power);
	print "The %s has %d health and %d power" % (goblin.name,goblin.health,goblin.power);
	user_input = raw_input()
	if user_input == "1":
		goblin.take_damage(theHero.power);
		theHero.take_damage(goblin.power)




