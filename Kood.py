import winsound
import os
import random
import flask

folder=('Music1\\')
list=[]
artistid=[]
laulud=[]
number=int(0)

list=os.listdir('testmusicfolder\\'+folder)
print(list)

for element in list:
    artist, laul = list[number].split(" - ")
    number=number+1
    artistid.append(artist)
    laulud.append(laul)

print(random.choice(list))

winsound.PlaySound((("testmusicfolder\\"+folder)+(random.choice(list))), winsound.SND_FILENAME)