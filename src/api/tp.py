import pandas as pd  
import os
os.chdir("F:/Projects/footstats/src/api")
a = pd.read_csv("best_finishers.csv") 
# to save as html file 
# named as "Table" 
a.to_html("Table.html") 
# assign it to a  
# variable (string) 
html_file = a.to_html()