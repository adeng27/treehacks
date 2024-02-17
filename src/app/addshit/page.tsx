"use client"

import { useAction } from "convex/react";
import { api } from "../../../convex/_generated/api";

export default function AddShit() {
    const insertMessages = useAction(api.realMessage.handleMessageSubmit);
    interface Message {
        Date: number;
        fromTarget: boolean;
        content: string;
        timeStamp: number;
    }
    
    function parseCSV(csvData: string): Message[] {
        const lines = csvData.trim().split('\n').slice(1); // remove header and split into lines
        const messages: Message[] = [];
    
        for (const line of lines) {
            const [_, dateStr, phoneNumberStr, message, orderStr] = line.split(',');
    
            const messageObj: Message = {
                Date: parseFloat(dateStr),
                fromTarget: phoneNumberStr.trim() === "True",
                content: message,
                timeStamp: parseInt(orderStr)
            };
    
            messages.push(messageObj);
        }
    
        return messages;
    }
    
    // Example usage
    const csvData = `",Date,Phone Number,Message,Order
    0,2206021119.0,False,do i call the saxophone place and say my dad will drop off,1
    1,2206021119.0,True,Hello?,2
    2,2206021119.0,True,Sorry I missed your call. Need something?,3
    3,2206021119.0,False,and say if that doesn’t work i’ll do next week,4
    4,2206021120.0,True,"Yes, please ask if can move to 11:30",5
    5,2206021211.0,True,Why what happened?,6
    6,2206021211.0,True,Why not Monday or Wed then? I can go with you,7
    7,2206021211.0,True,Hi son. Makena would Roll Them Up Taquitos tonight. What time are you going to be home? We can get for you and then have it when you get home,8
    8,2206021211.0,True,Are you coming home soon? We have dinner and you need to go to bed soon,9
    9,2206021211.0,True,I’m going to mt sac for my meeting. I’ll be back by 1. I can make lunch /dinner when I get home,10
    10,2206021211.0,True,1:15,11
    11,2206021211.0,True,Was it the same person?,12
    12,2206021211.0,True,Can you tried off the oven? And turn on the stove?,13
    13,2206021211.0,True,Please be careful,14
    14,2206021211.0,True,"Yes, please",15
    15,2206021211.0,True,Low fire,16
    16,2206021211.0,True,You can leave in the oven but turn off,17
    17,2206021211.0,False,i will take makena to kaiser soon,18
    18,2206021211.0,True,I’m almost done. Can you stir the pot?,19
    19,2206021211.0,True,Please don’t forget to move your car and you can park Left hand side,20
    20,2206021211.0,True,Please call me asap. I need your help,21
    21,2206021211.0,True,How long? I don’t think you should be driving late until you want me to take you?,22
    22,2206021211.0,True,Can you send your location?,23
    23,2206021211.0,True,Please come home after eating.,24
    24,2206021211.0,True,Who is Nathan?,25
    25,2206021211.0,True,Walk with Charlton?,26
    26,2206021211.0,False,sorry i missed ur call,27
    27,2206021211.0,True,Are you done eating? Walking in public area?,28
    28,2206021211.0,True,"I’ll ask your dad, ok?",29
    29,2206021211.0,True,Thank you,30
    30,2206021211.0,True,It’s ok,31
    31,2206021211.0,True,Did makena leave?,32
    32,2206021211.0,False,yea,33
    33,2206021211.0,False,still eating but yes public area,34
    34,2206021211.0,False,nathan is part of the friend group,35
    35,2206021211.0,False,yes,36
    36,2206021211.0,False,it’s with a  group of 10+ people,37
    37,2206021211.0,False,can i go to nathan’s house and walk around,38
    38,2206021211.0,False,i’m not sure because it might take a while,39
    39,2206021211.0,False,but it might take a while,40
    40,2206021211.0,False,i am with charlton and fiends and we are going to go eat at a pho place,41
    41,2206021211.0,False,what time do i need to be home,42
    42,2206021211.0,False,attachments/79/952006a8-4c00-42fa-80f8-34b9ffb71698.heic,43
    43,2206021211.0,False,do i put back,44
    44,2206021211.0,False,oops i took out,45
    45,2206021211.0,False,do i take it out of the oven,46
    46,2206021211.0,False,yes,47
    47,2206021211.0,False,753,48
    48,2206021211.0,False,and i turn on the pot on the stove to what temperature,49
    49,2206021211.0,False,i asked if it’s better for me to be there and he said yes,50
    50,2206021211.0,False,we have to get next week friday at 10 for saxophone,51
    51,2206021211.0,False,so i moved appointment,52
    52,2206082209.0,True,Don’t you have to get home early to go see Jill?,53
    53,2206082225.0,True,Hello?,54
    54,2206082225.0,False,i will sent location,55
    55,2206082225.0,False,i am hiking rn,56
    56,2206082225.0,False,hello,57
    57,2206082227.0,True,Dad said to be home by 11. Does that work?,58
    58,2206082227.0,False,i think so,59
    59,2206082228.0,False,with group,60
    60,2206082228.0,False,can i stop  texting please,61
    61,2206082228.0,True,Are you heading back to your car? Are you with group?,62
    62,2206082228.0,True,Ok,63
    63,2206082252.0,True,When are Kristine and ripley leaving?,64
    64,2206082252.0,True,Good morning,65
    65,2206082252.0,True,Hi. What time are you coming home?,66
    66,2206082252.0,True,"When your awake, please share location. Thank you",67
    67,2206082252.0,True,Hello,68
    68,2206082252.0,True,Have them come to our house. No one here,69
    69,2206082252.0,True,I thought you were going to call me if you are leaving?,70
    70,2206082252.0,False,can i sleepover with aiden and jett tonight,71
    71,2206082252.0,True,Ok. I’ll call dad now,72
    72,2206082252.0,False,it might be 11:15ish because i waitijt for other people who are going slow,73
    73,2206082252.0,False,aiden from jazz band,74
    74,2206082252.0,True,Can I meet them later? I need more details,75
    75,2206082252.0,False,after dinner probably,76
    76,2206082252.0,False,they won’t be sleeping over,77
    77,2206082252.0,False,soon i jsut dropped offkristine’s towel at her house because she left it there,78
    78,2206082252.0,False,hello,79
    79,2206082252.0,False,just woke up,80
    80,2206082252.0,False,i will be home around 10-10:15,81
    81,2206082252.0,False,,82
    82,2206082252.0,False,kristine and ripley will be there for dinner,83
    83,2206082252.0,False,okay can you ask dad first. they made pizza st their house so i can eat dinner there at least,84
    84,2206082252.0,False,caryn,85
    85,2206082252.0,False,9092292772,86
    86,2206082252.0,False,mom,87
    87,2206082252.0,False,hello,88
    88,2206082252.0,False,i will send locatiom the whole time,89
    89,2206101106.0,True,Hi son. You didn’t say hi to me.,90
    90,2206101108.0,True,Can you make sure you call into the Zoom at 12:30 today for summer school?,91
    91,2206101119.0,True,attachments/79/1df0f266-c5d6-4044-a240-8313f97cb41f.heic,92
    92,2206101119.0,True,https://account.venmo.com/u/SharlaneBailey-1,93
    93,2206101119.0,False,what is ur venmo for the saxophone,94
    94,2206101130.0,True,Do he want me to pay ahead of time?,95
    95,2206101152.0,False,,96
    96,2206101152.0,False,no it’s okay,97
    97,2206131156.0,True,"When you come down to eat, can you make sure the garage door is closed?",98
    98,2206131216.0,False,yea,99
    99,2206131250.0,True,attachments/79/278a6a6a-4dc1-461a-a8f3-a996cd3c78e4.heic,100
    100,2206131253.0,True,Hello?,101
    101,2206131253.0,False,yea,102
    102,2206142232.0,False,https://www.wwbw.com/Yamaha-V1-Series-Alto-Saxophone-Neck-H74555.wwbw,103
    103,2206142233.0,False,i going home right now,104
    104,2206142233.0,False,no thanks i’m full,105
    105,2206142233.0,False,unlaquered for 315$,106
    106,2206142233.0,False,yes,107
    107,2206142233.0,False,pinehurst,108
    108,2206142233.0,False,is it’s louie’s birthday,109
    109,2206142233.0,False,jun 3 - july 27 chaffey math75,110
    110,2206142233.0,False,pizza and egg roll and chips and fruit and lemonade,111
    111,2206142233.0,False,and beef stick,112
    112,2206142233.0,True,What did you eat?,113
    113,2206142233.0,True,Yes,114
    114,2206142233.0,False,am i picking up makena,115
    115,2206142233.0,True,Please,116
    116,2206142233.0,True,"Yes, please say HBD. He misses his cousins and you should text him more 😃",117
    117,2206142233.0,True,Can you pick up makena too and go straight to Kaiser,118
    118,2206142233.0,True,Hi son. What park are you at?,119
    119,2206142233.0,True,With band ?,120
    120,2206142233.0,True,Gm son. I was at the dentist. Need anything?,121
    121,2206142233.0,True,When will you be home?,122
    122,2206142233.0,True,Do you want gnocchi for dinner?,123
    123,2206142233.0,False,this is the one id like to have for my saxophone,124
    124,2206181111.0,True,Hi. How’s it going?,125
    125,2206181113.0,False,can u bring a gatorade,126
    126,2206181113.0,False,probably,127
    127,2206181113.0,False,u can come to gym with us,128
    128,2206181113.0,False,i am leaving now,129
    129,2206181113.0,False,350,130
    130,2206181113.0,False,it’s okay kristine is busy with her family,131
    131,2206181113.0,False,we will eat breakfast tmrw,132
    132,2206181113.0,True,I forgot to mention if you want watermelon or pineapple it’s in the refrigerato,133
    133,2206181113.0,True,Do you want to go to Costco tonight?,134
    134,2206181113.0,True,Are you sure?,135
    135,2206181113.0,True,attachments/79/5073da7e-17ce-4a5d-a10e-8228567ef6ef.heic,136
    136,2206181113.0,True,Ok. What’s your eta?,137
    137,2206181113.0,True,Do you want me to bring you anything? Water? Food?,138
    138,2206181113.0,True,Ok,139
    139,2206181113.0,True,Makena is getting her haircut soon so I can drop her off at gym at 4 if you want. Should we sign her up for buddy pass like that guy said?,140
    140,2206181113.0,False,okay,141
    141,2206181113.0,True,I’m at Albertsons. Want anything else?,142
    142,2206201259.0,True,Hi son. You need dinner? Or when you get home?,143
    143,2206201259.0,True,I don’t use as often,144
    144,2206201259.0,True,Please send location so I know your safe 😀,145
    145,2206201259.0,True,Are you at the school now?,146
    146,2206201259.0,True,"Yes, I can bring food.",147
    147,2206201259.0,True,Did you have your usual foot long sub? I can get that for you. I can also go to Albertsons bc I have to get a gift card for Tita Cathy. Let me know,148
    148,2206201259.0,True,Why does your stomach hurt? Is it bc your hungry?,149
    149,2206201259.0,True,"Ok, I will get you wedges and chicken fingers?",150
    150,2206201259.0,True,Sugar for home? Cookies?,151
    151,2206201259.0,True,We can get big Rice Krispies at Sams or Costco,152
    152,2206201259.0,True,Want fig newtons?,153
    153,2206201259.0,True,From Albertsons?,154
    154,2206201259.0,True,I’ll see what they have or we can go to Sams Wednesday?,155
    155,2206201259.0,True,Can you just eat the sour patch then?,156
    156,2206201259.0,True,Want me to bring some in small bag for band?,157
    157,2206201259.0,True,I’m in line. Be there soon. You said 545?,158
    158,2206201259.0,False,my stomach hurts,159
    159,2206201259.0,True,Oh no. You should have told me… can you go wash your hands and stuff? One one other person ahead of me,160
    160,2206201259.0,True,Oh no… what time do I need to be there?,161
    161,2206201259.0,True,I went back to the office. Im leaving now,162
    162,2206201259.0,True,And will order subway,163
    163,2206201259.0,True,I’m ordering subway now,164
    164,2206201259.0,True,I’m driving right now. What time is your break?,165
    165,2206201259.0,True,You can pick up at 5:50,166
    166,2206201259.0,True,attachments/79/fe23bf0f-8b44-4282-a44e-5f532b86d3f3.heic,167
    167,2206201259.0,True,attachments/79/1f640d60-bf26-46f4-a6fc-3da3c6cbae71.heic,168
    168,2206201259.0,True,attachments/79/06aadeab-9155-41db-aa11-fded65cce7e6.heic,169
    169,2206201259.0,True,Oh no. I’m sorry. My fault. I got caught up with my work emails,170
    170,2206201259.0,True,Good morning. Are you awake?,171
    171,2206201259.0,True,Ok. I was thinking if you want to drive by the HS sooner than later to see if your earbuds are still there,172
    172,2206201259.0,True,☹️,173
    173,2206201259.0,True,You can have one of mine if you want,174
    174,2206201259.0,True,Are you hungry? Want me to make you chicken quesadilla?,175
    175,2206201259.0,False,yes can i have some food when i have my break,176
    176,2206201259.0,False,it’ll be around 5:45,177
    177,2206201259.0,False,maybe chicken quesadilla,178
    178,2206201259.0,False,?,179
    179,2206201259.0,False,i soend 30 mins looking,180
    180,2206201259.0,False,i’m at gym,181
    181,2206201259.0,False,sorry i’m late and they are calling me,182
    182,2206201259.0,False,it was 9$,183
    183,2206201259.0,False,okay,184
    184,2206201259.0,False,when will you be there do you think,185
    185,2206201259.0,False,yes please,186
    186,2206201259.0,False,yeah we done early,187
    187,2206201259.0,False,what time will you be here,188
    188,2206201259.0,False,i already did and couldn’t find them,189
    189,2206201259.0,False,okay,190
    190,2206201259.0,False,no it’s okay,191
    191,2206201259.0,False,i think it hurts because hungry,192
    192,2206201259.0,False,also if u go to albertsons can u get something with sugar,193
    193,2206201259.0,False,okay thank you,194
    194,2206201259.0,False,either wedges and chicken or either chicken quesadilla,195
    195,2206201259.0,False,for,196
    196,2206201259.0,False,like pixie sticks or rice krispies,197
    197,2206201259.0,False,no pure sure not refined like bread,198
    198,2206201259.0,False,like just got home,199
    199,2206231041.0,False,i found it,200
    200,2206231041.0,False,when i was leaving for the car the front desk guy said he had it,201
    201,2206231041.0,True,Oh good. Where did you find it?,202
    202,2206231042.0,True,Ok good. Maybe it dropped from your bag. Good idea to always keep in your bag,203
    203,2206231044.0,False,no i want to volunteer so i can finish with it up,204
    204,2206231044.0,False,i have around 5 more days to go,205
    205,2206231044.0,True,"Also, I know I asked you yesterday but do you want to go to Santa Monica Saturday to see Makena and maybe Sky and Tita Cheryl if they can go? Makena’s group is having a field trip to Santa Monica",206
    206,2206231046.0,False,okay :),207
    207,2206231046.0,True,What time should I start it? The meat will just take about 15 min,208
    208,2206231046.0,True,Start in 10 minutes?,209
    209,2206231046.0,True,I think you should leave there at 10. Do I not make this food?,210
    210,2206231046.0,True,When is it over? Who is watching? I thought you were going to eat here? Do I not make it? You have to get up early,211
    211,2206231046.0,True,That’s too late. Are you not volunteering tomorrow?,212
    212,2206231046.0,True,"Did she tell you about coming over earlier? You should learn to plan better, son. Or sometimes you can’t be at someone’s beck and call. Sorry",213
    213,2206231046.0,True,It’s ok… just finish the movie but please leave once it’s done. If it’s not done by 10:30 then you need to leave. Don’t drive fast but you should be home no later than 10:45 so you can get atleast 7 hours of sleep.,214
    214,2206231046.0,True,Are you sure? It doesn’t taste good without rice. I’ll make one cup,215
    215,2206231046.0,True,That’s too late to eat. I thought you were going to be home by 9? You have to volunteer at 7,216
    216,2206231046.0,True,"Ok, what time should I make it and do you want purple or black rice? Eating just white is too high in carbs",217
    217,2206231046.0,True,I’ll be home soon. Getting some stuff from Denise Barr,218
    218,2206231046.0,True,Don’t worry about calories of your working out. This isn’t junk food so it’s fine.,219
    219,2206231046.0,True,"I can make black, purple or white rice with it",220
    220,2206231046.0,True,attachments/79/cbd15379-dc4e-4894-88c2-fd10075df38c.HEIC,221
    221,2206231046.0,True,I haven’t made it yet,222
    222,2206231046.0,True,"Ok, when done can you call me? I just want to know if I should make the beef and broccoli for dinner",223
    223,2206231046.0,True,Can you volunteer tomorrow?,224
    224,2206231046.0,True,"Ok. With who? Want to go to Santa Monica and we can meet makena, sky and Tita Cheryl?",225
    225,2206231046.0,True,Do you want to volunteer on Friday? So that you don’t get to the beach so late on Saturday.,226
    226,2206231046.0,True,What time do I bring your dinner? I have one chicken quesadilla and your sandwich. Anything else? Fruit?,227
    227,2206231046.0,True,I’m here,228
    228,2206231046.0,False,when do i leave,229
    229,2206231046.0,True,It’s not good to eat late tho,230
    230,2206231046.0,False,okay,231
    231,2206231046.0,False,it will be over around 10:30,232
    232,2206231046.0,False,i will be well rested,233
    233,2206231046.0,False,yes can u make,234
    234,2206231046.0,False,please,235
    235,2206231046.0,False,so i can decide,236
    236,2206231046.0,False,can u send picture so i know how much it is,237
    237,2206231046.0,False,yes,238
    238,2206231046.0,False,in game,239
    239,2206231046.0,False,mom i can’t talk rn,240
    240,2206231046.0,False,"Sorry, I can't talk right now.",241
    241,2206231046.0,False,,242
    242,2206231046.0,False,can i goto kristine’s house,243
    243,2206231046.0,False,no fruit,244
    244,2206231046.0,False,right now,245
    245,2206231046.0,False,i’ll consider volunteering tmrw,246
    246,2206231046.0,False,with band people,247
    247,2206231046.0,False,can i go to the beach after i volunteer on saturday,248
    248,2206231046.0,False,no rice,249
    249,2206231046.0,False,10,250
    250,2206231046.0,False,how many calories is all of it,251
    251,2206231046.0,False,okay i’ll be home at 9:30,252
    252,2206231046.0,False,no don’t make it plz,253
    253,2206231046.0,False,i didn’t do anything excessive,254
    254,2206231046.0,False,rest day,255
    255,2206231046.0,False,i am but it’s okay becuase today was a test day,256
    256,2206231046.0,False,no at 10,257
    257,2206231046.0,True,Oh… playing a game with Kristine and family?,258
    258,2206231046.0,False,how long can i stay,259
    259,2206231046.0,False,we are watching a movie,260
    260,2206231046.0,True,Why? 🙁,261
    261,2206231046.0,False,also i am not hungry i ate some adobo here,262
    262,2206231046.0,False,it’s kristine n her sister and cousins,263
    263,2206242238.0,True,I thought you would be home by now? Please drive safe,264
    264,2206242238.0,False,,265
    265,2206251112.0,False,cam i get driven to the beach,266
    266,2206251132.0,True,Who is driving ? Adult?,267
    267,2206251134.0,True,"I know your responsible, son, but do I know the driver?",268
    268,2206251135.0,True,Can I pick you up since you’ll probably be there after dark?,269
    269,2206251158.0,False,okay you can pick me up,270
    270,2206251200.0,True,"Ok. I feel more comfortable with that. Please know I trust you, I just don’t trust other drivers…. anything could happen and I’d feel horrible if anything happened to my son 😍",271
    271,2206251212.0,True,You can tell your friends I’ll be in the area for something else,272
    272,2206251233.0,False,909 696 1134,273
    273,2206251233.0,False,can u pick up at 9,274
    274,2206251233.0,False,yes,275
    275,2206251233.0,False,can it be u,276
    276,2206251233.0,True,Or 10:15?,277
    277,2206251233.0,False,eta 9:30,278
    278,2206251233.0,False,8079 Gulfstream Street,279
    279,2206251233.0,False,kristine’s sister will take me to my car from there then i will go home,280
    280,2206251233.0,False,yes but we are going to emily’s house to eat the hot dogs because we couldn’t get a bonfire,281
    281,2206251233.0,True,I can drop you off to your friends house since I have to return book at library before they close,282
    282,2206251233.0,True,It didn’t work. Please send location,283
    283,2206251233.0,True,Is everyone going home at that time or just you?,284
    284,2206251233.0,True,Is Emily’s mom driving?,285
    285,2206251233.0,True,"You said the Emily’s mom is with you all, right?",286
    286,2206251233.0,True,"Ok, I feel better that there is an adult with you in case anything happens.",287
    287,2206251233.0,True,Are you coming home soon? Leaving at 9?,288
    288,2206251233.0,True,Dad said you need to be home by 10. Why don’t I pick you up at Emily’s house? What time will you be there.,289
    289,2206251233.0,True,Please send me Emily’s address,290
    290,2206251233.0,True,Ok,291
    291,2206251233.0,True,Ok. I go there at 945?,292
    292,2206251233.0,True,"Ok, dad said he wants to pick you both up",293
    293,2206251233.0,True,I told him 10:15,294
    294,2206251233.0,True,I told him I would but he said he wanted to,295
    295,2206251233.0,True,I tried to do it. Sorry. It will be ok….,296
    296,2206251233.0,True,It’s late already. Call dad.,297
    297,2206251233.0,True,Why do keep changing the time?,298
    298,2206251233.0,True,Your at their house now,299
    299,2206251233.0,True,Why do you have to wait for them?,300
    300,2206251233.0,True,I’m trying to call you,301
    301,2206251233.0,True,Do you want to go to church with me today?,302
    302,2206251233.0,False,my car is by kristine’s house tho,303
    303,2206251233.0,False,can we eat for like 15 mins and then you take us home?,304
    304,2206251233.0,False,they have the hot dogs,305
    305,2206251233.0,False,what do i do,306
    306,2206251233.0,False,wya is nos 945 bc traffic,307
    307,2206251233.0,False,their eta is in 15 min,308
    308,2206251233.0,False,not other people,309
    309,2206251233.0,False,cuz more and more traffic,310
    310,2206251233.0,False,do i still call dad,311
    311,2206251233.0,False,okay wait there’s a lot of traffic,312
    312,2206251233.0,False,or no,313
    313,2206251233.0,False,10:15 please,314
    314,2206251233.0,False,can you come at 10:30,315
    315,2206272214.0,True,Hi son. Is the movie over?,316
    316,2206272233.0,True,Ok. I’ll let them know,317
    317,2206272233.0,False,no i am not going,318
    318,2206272233.0,True,Hi. Are you at Casa Colina today?,319
    319,2206272233.0,True,I thought we are going to yogurtland?,320
    320,2206272233.0,True,Hi. Where are you going?,321
    321,2206272233.0,False,i’m there today,322
    322,2206272233.0,False,i’m good,323
    323,2206272233.0,False,probably not going tomorrow,324
    324,2206272233.0,False,attachments/79/c5c17cf2-796b-4bb3-935e-06fe32c8d837.heic,325
    325,2206272233.0,True,So not going to tomorrow? I will let them know that your still thinking of going tomorrow,326
    326,2206272233.0,False,later,327
    327,2206272233.0,False,yes i’m coming home soon,328
    328,2206272233.0,False,when is jill,329
    329,2207021130.0,False,you can leave,330
    330,2207021130.0,False,i am good,331
    331,2207021137.0,False,no,332
    332,2207021137.0,True,Ok. I finally find parking. It’s al the way where we bring our car for service. I’m walking here now,333
    333,2207021137.0,True,We,334
    334,2207021137.0,True,What’s your eta?,335
    335,2207021137.0,True,What’s your eta,336
    336,2207021137.0,True,Ok. I’m home. Are you sure to not pick you up?,337
    337,2207021137.0,True,I’m almost home so I can be there by 7,338
    338,2207021137.0,True,Ok. Please leave there by 730,339
    339,2207021137.0,True,"Ok, who is driving you home?",340
    340,2207021137.0,True,Is that ok or you really want to stay longer?,341
    341,2207021137.0,True,Can you send me the address or your location,342
    342,2207021137.0,True,Just tell them you have relatives visiting and need to be home,343
    343,2207021137.0,True,I can pick you up and be there by 7,344
    344,2207021137.0,True,Noah misses you 😁,345
    345,2207021137.0,True,It’s long enough don’t you think?,346
    346,2207021137.0,True,Do you want to let Kristine know that I can pick you up?,347
    347,2207021137.0,True,What parking zone?,348
    348,2207021137.0,False,they don’t know,349
    349,2207021137.0,True,I’m by the kettle corn,350
    350,2207021137.0,False,when will you guys be home,351
    351,2207021137.0,False,trying to remember all her family’s name,352
    352,2207021137.0,False,po,353
    353,2207021137.0,False,ok,354
    354,2207021137.0,False,good,355
    355,2207021137.0,False,they aren’t leaving yet,356
    356,2207021137.0,True,What time is that? I can pick you up,357
    357,2207021137.0,True,Ok,358
    358,2207021137.0,True,Are they leaving now? Yes if they can.,359
    359,2207021137.0,True,What time are they leaving?,360
    360,2207021137.0,True,Ok… are you bored? We are still in the boat,361
    361,2207021137.0,True,Ok what are you guys doing?,362
    362,2207021137.0,True,Are there a lot of family members there?,363
    363,2207021137.0,True,attachments/79/b3cf28e3-7391-4451-8a4f-5b27da158463.heic,364
    364,2207021137.0,True,attachments/79/b551fe55-16f6-4de4-8614-b74b1905848b.heic,365
    365,2207021137.0,False,will kristine’s parents drop me off at our home?,366
    366,2207021137.0,True,We should be home in about 30 min,367
    367,2207021137.0,True,How are you doing?,368
    368,2207021137.0,False,no they will drop me off when they head home,369
    369,2207021137.0,True,Want me to pick you up?,370
    370,2207021137.0,False,not sure yet,371
    371,2207021137.0,False,no it’s okay i will spend more time with them,372
    372,2207021137.0,False,it’s okay they’re planning on leaving around 7:30,373
    373,2207021137.0,False,i’ll be home by 8,374
    374,2207021137.0,False,okay,375
    375,2207021137.0,False,i would prefer to stay a little longer,376
    376,2207021137.0,False,i’ll definitely be home by 8 though,377
    377,2207021137.0,False,it’ll be her older sister or her mom,378
    378,2207021137.0,False,it’s alright,379
    379,2207021137.0,False,yeah,380
    380,2207021137.0,False,35 mins,381
    381,2207021137.0,False,we are next to the kettle corn near the parking zone,382
    382,2207030018.0,True,Did you brush your teeth? Please do so in our bathroom so you can keep the other one open for Tita,383
    383,2207030019.0,True,Ok. Good night,384
    384,2207030019.0,True,After the movie?,385
    385,2207030019.0,False,already did earlier,386
    386,2207030019.0,False,before,387
    387,2207041151.0,True,attachments/79/80fdceea-3e35-42fe-a431-f0920d697225.MOV,388
    388,2207041151.0,True,attachments/79/dde091e8-3cf6-4179-9d42-d34fc03ae89d.jpeg,389
    389,2207041151.0,True,Good morning son. When you can please fix your parking. Tire is on curb and can ruin tire. No street cleaning today. It’s next Tuesday,390
    390,2207051037.0,True,Hi,391
    391,2207051107.0,True,attachments/79/714fd776-3c13-4493-abca-5559bd2ca334.heic,392
    392,2207051107.0,True,https://studentaid.gov/entrance-counseling/,393
    393,2207051107.0,True,Then she will need to get a private loan. How about a loan thru the school credit union?,394
    394,2207051107.0,True,https://www.collegeavestudentloans.com/,395
    395,2207051107.0,True,Why is my internet unstable?,396
    396,2207051107.0,False,she can only get direct unsubsidized loans,397
    397,2207051107.0,False,her sister said to try and get public loans and not private loans,398
    398,2207051107.0,False,that is the fafsa website,399
    399,2207051107.0,True,Did she try this website?,400
    400,2207051107.0,False,it was only 5500/7800,401
    401,2207051107.0,False,but she doesn’t qualify for enough loans for everything,402
    402,2207051107.0,False,she got that but it doesn’t cover it all,403
    403,2207051107.0,True,https://studentaid.gov/understand-aid/types/loans/subsidized-unsubsidized#subsidized-vs-unsubsidized,404
    404,2207051107.0,True,Makena has it too,405
    405,2207051107.0,True,https://money.cnn.com/2016/09/25/pf/college/fafsa-application-changes/index.html,406
    406,2207051107.0,False,i don’t have a qr,407
    407,2207051107.0,False,couod u send the add to apple pay link,408
    408,2207051107.0,False,never mind,409
    409,2207051107.0,True,Good morning,410
    410,2207051107.0,True,It says parking with your QR code,411
    411,2207051107.0,False,she already did that,412
    412,2207051107.0,True,How about subsidized loans?,413
    413,2207051107.0,False,yes,414
    414,2207051107.0,True,What?,415
    415,2207051107.0,True,Tita Gi said you just got there? 😫,416
    416,2207051107.0,True,Not good. Sorry about that. I knew you guys should have left earlier,417
    417,2207051107.0,True,What’s your eta?,418
    418,2207051107.0,True,Please don’t tell Noah that I knew you were awake. We should be home by 10:30,419
    419,2207091236.0,True,Do you need more protein drink? Need anything from Sam’s club?,420
    420,2207091237.0,True,attachments/79/d803c982-8426-401b-82a3-70614140e571.heic,421
    421,2207091237.0,False,yeah,422
    422,2207091237.0,False,and not plant based ones,423
    423,2207091237.0,False,more of protein shake,424
    424,2207091239.0,True,attachments/79/86c1ebb5-2d47-467f-90ed-a44cd81c95cb.HEIC,425
    425,2207091239.0,True,Which one?,426
    426,2207091241.0,True,Anything else you need?,427
    427,2207091241.0,False,premier protein,428
    428,2207091242.0,False,we might need some more meat for this week,429
    429,2207091242.0,False,do they have that?,430
    430,2207091242.0,False,creatine,431
    431,2207091242.0,True,From Sam’s?,432
    432,2207091243.0,False,wait can we eat dinner,433
    433,2207091243.0,False,can i leave at 9,434
    434,2207091243.0,False,i don’t need cash,435
    435,2207091243.0,False,at the market,436
    436,2207091243.0,False,oreo,437
    437,2207091243.0,False,yes,438
    438,2207091243.0,False,have,439
    439,2207091243.0,False,i don’t think they ah e,440
    440,2207091243.0,False,walking around,441
    441,2207091243.0,True,Do you need $,442
    442,2207091243.0,True,There are a lot of kids walking around parking lot so please be careful. Drive slow,443
    443,2207091243.0,True,Eat then leave at 9:30 ok?,444
    444,2207091243.0,True,9:30 ok?,445
    445,2207091243.0,True,Ok. Do you need money?,446
    446,2207091243.0,True,We are leaving now. Are you leaving soon?,447
    447,2207091243.0,True,What have you been doing?,448
    448,2207091243.0,True,What? You didn’t eat dinner?,449
    449,2207091243.0,True,Can we go later bc I have ice cream in truck,450
    450,2207091243.0,True,attachments/79/eb5f808a-5bd2-4d99-be74-324a386c632b.heic,451
    451,2207091243.0,True,"Let me know if you need cash, ok?",452
    452,2207091243.0,True,Where are you?,453
    453,2207091243.0,True,Only if you want cash,454
    454,2207091243.0,True,We are here too,455
    455,2207091243.0,True,"Ok. That’s the latest, ok?",456
    456,2207091243.0,True,We were ready to leave then Dalila wanted one more thing 😫. We are leaving soon,457
    457,2207091243.0,False,we are only lunch,458
    458,2207091243.0,False,okay,459
    459,2207091243.0,True,"Is that to the one we got from the the health store? I don’t think they have here, can you check Sam’s internet?",460
    460,2207102258.0,False,mom someone canceled for laser tag because they got covid,461
    461,2207102258.0,True,Can makena go? Or call them and ask if they can get one refund?,462
    462,2207102258.0,True,attachments/79/7db0ac6f-07b2-4737-b882-ac88800b0bba.heic,463
    463,2207102258.0,False,i soend 41 $,464
    464,2207102258.0,False,what should i do so i don’t have to pay for another person,465
    465,2207141129.0,False,also someone named fernando castro keeps calling,466
    466,2207141130.0,False,they said no refunds but i can convert to arcade tokens or play another round or do another day,467
    467,2207141130.0,False,i don’t know anybody else,468
    468,2207141130.0,False,i could do arcade,469
    469,2207141130.0,False,yes arcade for $20,470
    470,2207141130.0,False,it’s too late,471
    471,2207141130.0,False,yes,472
    472,2207141130.0,False,and makena doesn’t want to eithe r,473
    473,2207141130.0,False,okay,474
    474,2207141130.0,False,yes,475
    475,2207141130.0,True,Not sure who that is,476
    476,2207141130.0,True,Just don’t answer,477
    477,2207141130.0,True,Did you ask her? Is makena home?,478
    478,2207141130.0,True,Can you ask someone else to play?Not sure when you’ll be back?,479
    479,2207141130.0,True,Arcade for $20?,480
    480,2207141130.0,True,Makena?,481
    481,2207141130.0,True,How about Kristine?,482
    482,2207141130.0,True,Maybe ask if you can save the $20 for next time and go play arcade with her next time.,483
    483,2207141130.0,True,Is makena home now?,484
    484,2207141130.0,True,They should be able to refund you. If no please let me know and I can contact them,485
    485,2207151041.0,False,now,486
    486,2207151041.0,True,Bc I want to see you,487
    487,2207151041.0,True,What time are you leaving?,488
    488,2207151041.0,True,Can you wait a couple minutes?,489
    489,2207151041.0,False,why,490
    490,2207151043.0,True,I have the chips for you to bring g,491
    491,2207151200.0,True,Hi son. Please don’t forget to send your location. 😍,492
    492,2207151200.0,True,How’s it going?,493
    493,2207151200.0,False,sorry i just remembered,494
    494,2207152324.0,False,attachments/79/e8c535ae-bec1-4730-a3d4-edf3475236e9.heic,495
    495,2207152324.0,False,,496
    496,2207152324.0,False,,497
    497,2207152324.0,False,which do we have at home,498
    498,2207152324.0,True,"When is your homework due, son?",499
    499,2207152324.0,True,Please be very CAREFUL with your wallet. It was just laying on the floor,500
    500,2207152324.0,False,can i just ask someone to take notes for me at the seminar,501"`;
    
    // const parsedMessages = parseCSV(csvData);
    // console.log(parsedMessages);
    return (
        <div>
            <button onClick={() => {
                const theData = parseCSV(csvData)
                for (let i = 0; i < theData.length; i++) {
                    // console.log(i + 1)
                    insertMessages({ fromTarget: theData[i].fromTarget, content: theData[i].content, timeStamp: BigInt(i + 1)})
                }
            }}>
                CLICK ME
            </button>
        </div>
    )
}