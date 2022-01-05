#!C:\Python39\python.exe
import numpy as np
L=2
matrix = np.arange((L*L)/1).reshape((L,L))
rows, cols = matrix.shape
dictionary = [{'x':j, 'y':i, 'value':matrix[j,i]} for j in range(rows) for i in range(cols)]

import json
import sys

sys.stdout = open('./test_data.js', 'w')

jsonobj = json.dumps(dictionary)
print("var jsonstr = {} ".format(jsonobj))