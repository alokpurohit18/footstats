#!C:\Python39\python.exe
from itertools import count
import json
import csv
import os
import sys
from typing import Counter

from attr import dataclass

os.chdir("F:/Projects/footstats/src/api")

def create_json_data(file_name, data_array):    
    sys.stdout = open(file_name, 'w')
    jsonobj = json.dumps(data_array, indent=4)
    print("{}".format(jsonobj))
    sys.stdout = sys.__stdout__

with open("./players_22.csv", "r", encoding="utf-8") as f:
    reader = csv.reader(f)
    next(reader)
    data = []
    for row in reader:
        data_object = {
            "sofifa_id": row[0],
            "player_url": row[1],
            "short_name": row[2],
            "long_name": row[3],
            "player_positions": row[4],
            "overall": row[5],
            "potential": row[6],
            "value_eur": row[7],
            "wage_eur": row[8],
            "age": row[9],
            "dob": row[10],
            "height_cm": row[11],
            "weight_kg": row[12],
            "club_team_id": row[13],
            "club_name": row[14],
            "league_name": row[15],
            "league_level": row[16],
            "club_position": row[17],
            "club_jersey_number": row[18],
            "club_loaned_from": row[19],
            "club_joined": row[20],
            "club_contract_valid_until": row[21],
            "nationality_id": row[22],
            "nationality_name": row[23],
            "nation_team_id": row[24],
            "nation_position": row[25],
            "nation_jersey_number": row[26],
            "preferred_foot": row[27],
            "weak_foot": row[28],
            "skill_moves": row[29],
            "international_reputation": row[30],
            "work_rate": row[31],
            "body_type": row[32],
            "real_face": row[33],
            "release_clause_eur": row[34],
            "player_tags": row[35],
            "player_traits": row[36],
            "pace": row[37],
            "shooting": row[38],
            "passing": row[39],
            "dribbling": row[40],
            "defending": row[41],
            "physical": row[42],
            "attacking_crossing": row[43],
            "attacking_finishing": row[44],
            "attacking_heading_accuracy": row[45],
            "attacking_short_passing": row[46],
            "attacking_volleys": row[47],
            "skill_dribbling": row[48],
            "skill_curve": row[49],
            "skill_fk_accuracy": row[50],
            "skill_long_passing": row[51],
            "skill_ball_control": row[52],
            "movement_acceleration": row[53],
            "movement_sprint_speed": row[54],
            "movement_agility": row[55],
            "movement_reactions": row[56],
            "movement_balance": row[57],
            "power_shot_power": row[58],
            "power_jumping": row[59],
            "power_stamina": row[60],
            "power_strength": row[61],
            "power_long_shots": row[62],
            "mentality_aggression": row[63],
            "mentality_interceptions": row[64],
            "mentality_positioning": row[65],
            "mentality_vision": row[66],
            "mentality_penalties": row[67],
            "mentality_composure": row[68],
            "defending_marking_awareness": row[69],
            "defending_standing_tackle": row[70],
            "defending_sliding_tackle": row[71],
            "goalkeeping_diving": row[72],
            "goalkeeping_handling": row[73],
            "goalkeeping_kicking": row[74],
            "goalkeeping_positioning": row[75],
            "goalkeeping_reflexes": row[76],
            "goalkeeping_speed": row[77],
            "ls": row[78],
            "st": row[79],
            "rs": row[80],
            "lw": row[81],
            "lf": row[82],
            "cf": row[83],
            "rf": row[84],
            "rw": row[85],
            "lam": row[86],
            "cam": row[87],
            "ram": row[88],
            "lm": row[89],
            "lcm": row[90],
            "cm": row[91],
            "rcm": row[92],
            "rm": row[93],
            "lwb": row[94],
            "ldm": row[95],
            "cdm": row[96],
            "rdm": row[97],
            "rwb": row[98],
            "lb": row[99],
            "lcb": row[100],
            "cb": row[101],
            "rcb": row[102],
            "rb": row[103],
            "gk": row[104],
            "player_face_url": row[105],
            "club_logo_url": row[106],
            "club_flag_url": row[107],
            "nation_logo_url": row[108],
            "nation_flag_url": row[109],
        }
        data.append(data_object)

    create_json_data("fifa22.json", data)
