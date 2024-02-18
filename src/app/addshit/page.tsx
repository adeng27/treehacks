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
    const csvData = `,Date,Phone Number,Message,Order
    2,2208122224.0,True,o shit wrong person,3
    3,2208122224.0,True,ignore that plz,4
    4,2208122319.0,False,ok haha im better @ mancala anyways,5
    5,2208122353.0,True,"oh nooo, I’m horrible at mancala",6
    7,2208122353.0,True,just one,8
    16,2208130004.0,False,o no i might lose,17
    17,2208130005.0,True,i can’t tell if that’s sarcasm or not 😅,18
    18,2208130005.0,True,i can’t tell if that’s sarcasm or not 😅,19
    20,2208130006.0,False,no really bc the strategy idk i havent played in a while,21
    22,2208130008.0,False,yea u won..,23
    24,2208130009.0,True,🤭,25
    25,2208130009.0,False,i used to play w aaron n i had win streak of like 20+,26
    26,2208130009.0,False,esp dots n boxes 😋,27
    27,2208130009.0,True,it was on purpose 😃,28
    29,2208130011.0,True,i hate dots n boxes because i have to think so far ahead and it hurts my brain,30
    31,2208130012.0,False,idk i had weird sudoku mancala puzzle phase for a bit so it was rly fun,32
    32,2208130015.0,True,i had a chess phase 🤓,33
    33,2208130016.0,True,i do like puzzles and riddle type stuff tho,34
    34,2208130017.0,False,yea n summer i did like 1000 piece puzzles every week i was rly bored ig,35
    35,2208130019.0,True,you should do them upside down!,36
    36,2208130023.0,False,um. no,37
    37,2208130030.0,False,ohh,38
    38,2208130030.0,False,or mayb ill jus reread pride and prejudice,39
    39,2208130030.0,False,yea i want to read Emma next,40
    40,2208130030.0,False,but it takes so long to comprehend bc the english she uses is so confusing,41
    41,2208130030.0,False,mhm or like your immersed in the reading n then time passes by a lot faster,42
    42,2208130030.0,False,is it like kinda depressing or,43
    43,2208130030.0,False,whats it ab,44
    44,2208130030.0,False,haha ok ill read it later,45
    45,2208130030.0,False,oh that’s interesting,46
    46,2208130030.0,False,i didnt even check the list oopsies,47
    47,2208130030.0,False,the storm?,48
    48,2208130030.0,False,idk i thought id jus finish cuckoo or something,49
    49,2208130030.0,False,oh like a 1000 pc transparent puzzle,50
    50,2208130030.0,False,over summer i read the paris apartment its like this girl whos gonna go live w her brother but she cant find him when she gets to his apartment n she has to figure out if someone killed him or whatever,51
    51,2208130030.0,False,yea i think my favorite genre is romance or mystery,52
    52,2208130030.0,False,ya its basically jus stupid stinky guys hating on women lmao,53
    53,2208130030.0,False,my friend liked the movie n other ppl on letterboxd did too but i fell asleep 🥱,54
    54,2208130030.0,False,like i like the books i read for leisure but they were easier n ive only read half of One Flew Over Cuckoos Nest bc i dont rly like it,55
    55,2208130030.0,False,yea i started reading over summer again bc i was bored but i liked it i jus dont think i chose a good book for ap lit lol,56
    56,2208130030.0,False,shes funny like she seems a little lost but shes trying,57
    57,2208130030.0,False,yea shes so considerate,58
    58,2208130030.0,False,i just need applications tho ill prob turn it in in like 30 mins,59
    59,2208130030.0,False,im not done yet but i sent brandon like 2 ppls work so he did his n sent it to me lmao,60
    60,2208130030.0,False,yea i dont think she cares too much plus she literally told us we could paste pictures of the posters,61
    61,2208130030.0,False,yea im pretty sure bc tonight was the original due date,62
    62,2208130030.0,False,what are u gonna resd for the sem,63
    63,2208130030.0,False,the reading level was kinda like middle school but the plot was really good,64
    64,2208130030.0,False,oh i heard ab persuasion,65
    65,2208130030.0,True,i def wanna read a romance book,66
    66,2208130030.0,True,but then I also want to read a book with someone else so i don’t have to present alone and plus we can talk about the book,67
    67,2208130030.0,True,are you going to read a mystery book for this semester?,68
    68,2208130030.0,True,which mystery books do you like,69
    69,2208130030.0,True,it’s just very agonizing,70
    70,2208130030.0,True,i like them bc it’s like the enemy is nobody,71
    71,2208130030.0,True,you should try romance novels,72
    72,2208130030.0,True,damn,73
    73,2208130030.0,True,i looked at the synopsis for it and I thought it would all take place in a hospital so i didn’t want to read that one,74
    74,2208130030.0,True,lmao,75
    75,2208130030.0,True,no i don’t think it matters too much,76
    76,2208130030.0,True,wdym,77
    77,2208130030.0,True,yeah and I like her plans for us to read short stories,78
    78,2208130030.0,True,yeah lol for some reason i find her personality very amusing,79
    79,2208130030.0,True,i think all she cares about is that we like her class and think she’s a good teacher,80
    80,2208130030.0,True,how long did it take you to finish it?,81
    81,2208130030.0,True,okay! i’m just gonna try to do it quick and hope she doesn’t look too deeply into my applications,82
    82,2208130030.0,True,hi mia! did ms miller say that we needed to turn in the summer assignment by today to get the full extra credit?,83
    83,2208130030.0,True,yeah!,84
    84,2208130030.0,True,lol or one of the color gradient ones,85
    85,2208130030.0,True,i haven’t read books on my own since elementary and i think this class will motivate me to become a reader again,86
    86,2208130030.0,True,ms miller said on tuesday we’re going to do the speed dating think again but this time it’s with books from the library,87
    87,2208130030.0,True,to like help us choose,88
    88,2208130030.0,True,jane austens writing is so beautiful even though she didn’t have formal education,89
    89,2208130030.0,True,emma or persuasion,90
    90,2208130030.0,True,or maybe a jane austen book,91
    91,2208130030.0,True,i want to read anna karenina by tolstoy but it’s long and college apps are this semester so maybe i’ll read it next semester,92
    92,2208130030.0,True,it’s very detailed,93
    93,2208130030.0,True,the lady meets her old friend in a storm,94
    94,2208130030.0,True,no it’s the opposite,95
    95,2208130030.0,True,i’m not sure if i can say i liked it,96
    96,2208130030.0,True,it’s a fun? read,97
    97,2208130030.0,True,okay lol,98
    98,2208130030.0,True,i think i wouldn’t be able to tell it with the splendor that kate chopin does,99
    99,2208130030.0,True,or listen,100
    100,2208130030.0,True,u should read it when u have time,101
    101,2208130030.0,True,yeah,102
    102,2208130030.0,True,she’s really projecting with these stories she likes,103
    103,2208130030.0,True,i just read the new story ms miller posted,104
    104,2208130030.0,True,also wtf,105
    105,2208130030.0,True,I kinda like when I get stuck on a couple words though because then i get to ponder the different implications of what it might mean,106
    106,2208130030.0,True,yeah that’s true,107
    107,2208130030.0,True,also it’s like very surreal because you can feel her projecting her own romantic desires in her writing,108
    108,2208192200.0,True,yeah,109
    109,2208192201.0,False,or i forgot but something like that,110
    110,2208192201.0,False,im not sure what it was specifically but ppl say persuasion n emma n pride n prejudice all connect to depict jane austens love life and her desires but i dont think she ever married,111
    111,2208192201.0,True,like the main characters are always poor girls,112
    112,2208192201.0,True,yeah,113
    113,2208192201.0,True,i just like romance novels the best because authors can pour so much personal emotion into them,114
    114,2208192202.0,False,yea i only read pride n prejudice bc i watched the movie but i wanna read emma i jus bought a bunch of books alr so i told myself to wait lol,115
    115,2208192203.0,False,but books are always better than movies its jus so hard to comprehend jane austen,116
    116,2208192203.0,False,no i hav to go buy,117
    117,2208192203.0,True,do you own emma?,118
    118,2208192205.0,False,ok are u sure we can chose that book tho,119
    119,2208192205.0,True,plus anyone else that reads emma,120
    120,2208192205.0,True,i’ll read emma too and then we can do the same presentation?,121
    121,2208192206.0,True,i’ll ask ms miller but ik fs that pride n prejudice is there so idk why emma wouldn’t be allowed as well,122
    122,2208192207.0,False,tru but pride n prejudice has a rly prominent theme idk ab emma,123
    123,2208192207.0,False,like the title is literally the theme…,124
    124,2208192207.0,True,yeah,125
    125,2208192208.0,True,so we have examples to use when we want to reference a certain trope or something,126
    126,2208192208.0,True,i think the main point of the reading is just to gain a larger repertoire of knowledge tho,127
    127,2208192211.0,False,but idk which i wanna read btwn emma or persuasion,128
    128,2208192211.0,False,ya ask ms miller,129
    129,2208192212.0,False,prob jus emma actually,130
    130,2208192217.0,True,okay!,131
    131,2208192218.0,True,i like the plot to persuasion but emma sounds like it will be very enjoyable,132
    132,2208192219.0,True,it seems like emma has a very mr darcy personality,133
    133,2208192223.0,False,ugh i hated him tbh,134
    134,2208192224.0,False,esp in the movie he wasnt even cute at all but elizabeth was so pretty,135
    135,2208192228.0,True,who would you cast as mr darcy,136
    136,2208192230.0,False,not that guy tf,137
    137,2208192232.0,False,im not too familiar w actors tho plus that was back in like 2005 i only kno like james marsden n ryan gosling.,138
    138,2208192236.0,True,pride n prejudice is pretty much 10 things i hate about you,139
    139,2208192236.0,True,heath ledger,140
    140,2208192237.0,False,oh ya same exact trope,141
    141,2208192238.0,False,but the actors in 10 things i hate about you were def cuter than mr. darcy,142
    142,2208192239.0,True,hm,143
    143,2208192239.0,True,my mr darcy is cute,144
    144,2208192244.0,False,who,145
    145,2208192249.0,True,well idk who but like in my mind when i was reading pride and prejudice it was a cute guy,146
    146,2208192250.0,True,tmi sorry,147
    147,2208192250.0,True,he had long hair and tall nose and oval head,148
    148,2208192254.0,False,ya thats what i thought n they described him to b tall n like handsome but cold so not charming,149
    149,2208192301.0,True,actually that’s like an interesting thought,150
    150,2208192301.0,True,yeah,151
    151,2208192301.0,True,like how your expectations and visualizations of characters affect how much you like them and what your interpretation of a story is,152
    152,2208192307.0,False,ya i think its jus pretty privilege lmao,153
    153,2208192308.0,False,but mr. darcys character was alr pretty unappealing it wasnt until the end when he became charismatic,154
    154,2208192309.0,False,even in emma i saw the movie adaptation w anya n the guy is still ugly. mayb its jus a historical aspect?😅,155
    155,2208192311.0,True,lol maybe they’re trying to make the point that love is deeper than what is on the outside 💀,156
    156,2208192313.0,False,but ya.. deeper love…,157
    157,2208192313.0,False,or address the issue that there was an emphasis for women to fit higher beauty standards to appeal to men and attract a good suitor whereas men could b whatever n rich n theyd find a wife somehow,158
    158,2208192314.0,True,oh yeah,159
    159,2208192315.0,True,i’d assume that jane austen imagined her protagonists lovers to be good looking tho,160
    160,2208192315.0,True,i mean that’s what one of mr darcy’s flaws were,161
    161,2208192316.0,True,ahead of her time,162
    162,2208192318.0,False,hopefully lmao i dont think anyone would write a romance novel with a purposely ugly love interest,163
    163,2208192320.0,True,quasimodo 🧐,164
    164,2208192321.0,True,well he didn’t get the girl,165
    165,2208192326.0,False,ya my point proven,166
    166,2208192332.0,True,damn that’s actually relentless,167
    167,2208192332.0,True,whenever we see character flaws it’s never unattractiveness,168
    168,2208192333.0,True,well it’s a flaw,169
    169,2208192333.0,True,but we never see unattractiveness as a flaw in a dynamic character,170
    170,2208192334.0,True,unless it’s like beauty and the beast where someone was cursed to be ugly or something,171
    171,2208192356.0,False,mayb but like beauty is social construct so that can also b considered,172
    172,2208200025.0,True,well idk about beauty as a social construct,173
    173,2208200025.0,True,oh yeah,174
    174,2208200026.0,True,which may cause some aversion to talking about it,175
    175,2208200026.0,True,there’s definitely some biological parts to it,176
    176,2208201127.0,False,yea but i think unattractiveness isnt seen as a flaw bc dif ppl hav dif perceptions of it,177
    177,2208201128.0,False,plus in literature u kinda create the image in your head so they’re attractive to u lol,178
    178,2208201201.0,False,i just bought emma but i also bought handmaidens tale,179
    179,2208201201.0,True,yeah i guess it’s usually undesirable  to imagine a main character as unattractive since we try to relate to them personally,180
    180,2208201202.0,True,yeah,181
    181,2208201202.0,False,ive never read either before but i heard margaret atwood is also rly good,182
    182,2208201205.0,True,political books like that are sometimes hard for me to read because they usually assume that other people are sheep and mindless,183
    183,2208201206.0,True,which is kinda scary because then it’s like if i accept the premise of the book it’s making me selfish,184
    184,2208201210.0,False,oh ididnt even kno it was political,185
    185,2208201212.0,True,i think it’s about like a society where women are secondary citizens,186
    186,2208201213.0,True,and the main character is a rebel in a society of complacent people?,187
    187,2208201214.0,True,idk the reviews show it’s worth a read,188
    188,2208201215.0,False,ms miller said it was a popular book that a lot of her students liked,189
    189,2208201218.0,True,interesting,190
    190,2208201219.0,True,maybe the characters are super relatable,191
    191,2208221029.0,False,ur gonna b in my group for the calc quiz right 😁😁😁😁,192
    192,2208221037.0,True,okayy,193
    193,2208221038.0,True,how big are the groups,194
    194,2208221040.0,False,i heard 4 but im not sure,195
    195,2208221051.0,True,okay,196
    196,2208221051.0,True,hey mia!,197
    197,2208221051.0,True,are you planning to read emma early in the semester or later,198
    198,2208221051.0,True,i have some other books i wanna read and idk if i should do those first,199
    199,2208221051.0,True,but i want to up my reading repertoire,200
    200,2208221051.0,True,"okayy, so i’ll probably start it soon",201
    201,2208221051.0,True,do u like it so far?,202
    202,2208221051.0,True,okay emma is kinda an asshole,203
    203,2208221051.0,True,she did mr martin dirty,204
    204,2208221051.0,False,ya i like this one character i forgot her name,205
    205,2208221051.0,True,no it’s just 1 i think,206
    206,2208221051.0,False,mrs. bates,207
    207,2208221051.0,True,plus the book she wants to read as a class,208
    208,2208221051.0,False,wait do we do multiple books per semester?,209
    209,2208221051.0,False,ohh um idk ive only read like 30 pages of emma so far,210
    210,2208272335.0,False,shes just like mr. darcy,211
    211,2208272335.0,True,:/ evil protagonist,212
    212,2208272335.0,True,lmao like walter white from breaking bad,213
    213,2209162355.0,True,hey mia!,214
    214,2209162355.0,True,are you doing ok? u seemed a little off today,215
    215,2209170006.0,False,thanks for asking,216
    216,2209170006.0,False,yeaaaa im feeling better now,217
    217,2209170006.0,True,thats good to hear !,218
    218,2209212208.0,False,joseph could u help me w a question from calc rq,219
    219,2209212209.0,False,its #33 from ws 23,220
    220,2209212209.0,True,yeah,221
    221,2209212210.0,False,bc it kinda feels familiar but i cant find it in my notes,222
    222,2209212210.0,False,so like i think ik that u would wanna split it for symmetry but then would u split it in 2 or 4,223
    223,2209212212.0,True,the easiest way is probably to split it into 4,224
    224,2209212212.0,False,n then u put it in terns of y?,225
    225,2209212212.0,True,attachments/44/6fab2419-3865-4c0a-b344-c1ff124fc843.jpeg,226
    226,2209212213.0,True,yeah,227
    227,2209212213.0,True,yeah,228
    228,2209212213.0,False,oh ya i meant terms of x but solve for y,229
    229,2209212213.0,False,n then its same thing but x4,230
    230,2209212213.0,True,you could switch x and y tbh because the formula is the same for both,231
    231,2209212214.0,False,n then for the limit of the integral u jus use y=0? and solve for x for upper bound and then lower is 0,232
    232,2209212214.0,True,yeah it should work,233
    233,2209212215.0,True,yeah,234
    234,2209212216.0,True,it should be 0 to 8 for the integral,235
    235,2209212217.0,False,ok this is what i did,236
    236,2209212217.0,False,attachments/44/8a5b002a-9766-4459-bfa6-f6103362f754.heic,237
    237,2209212218.0,False,oh wait i forgot x4,238
    238,2209212219.0,False,so 55.948,239
    239,2209212220.0,True,it should be 48,240
    240,2209212221.0,True,arc length is the integral of sqrt(1+(y’)^2),241
    241,2209212221.0,False,uh oh,242
    242,2209212221.0,False,ohh i didnt use y’,243
    243,2209212222.0,True,or square,244
    244,2209212223.0,True,the way i remember it is the pythagorean theorem of dx and dy and then factor out dx,245
    245,2209212225.0,False,ok i got 48 yay,246
    246,2209212226.0,False,n yk all the like integrals in ws 22 do u think hes gonna make use do it all by hand or can we use calculator after we set up the integral,247
    247,2209212229.0,True,we’ll probably have to do solve them by hand,248
    248,2209212230.0,True,"but they should all be solvable by factoring, there shouldn’t be any special integrals",249
    249,2209212234.0,False,yea idk why i always get stuck solving the integral part,250
    250,2209212234.0,False,oh,251
    251,2209212241.0,True,when i get stuck i try to start from what I think the anti derivative would like and differentiate it and see how close i am,252
    252,2209212245.0,False,lmao idk if i have the mental capacity for that,253
    253,2209212248.0,True,yeah you do!,254
    254,2209212249.0,True,"it’s just practice too, which we will get a lot of bc mr rivera",255
    255,2209212250.0,True,although priya says she doesn’t like his teaching,256
    256,2209212251.0,False,neither do i haha,257
    257,2209212253.0,True,aww,258
    258,2209212254.0,True,you should try to sleep as much as possible! it helps me a lot mentally,259
    259,2209212255.0,False,ya i try to its jus like sometimes i cant fall asleep,260
    260,2209212255.0,False,& i was sleeping 9 hours during the first few weeks of school,261
    261,2209212255.0,True,:(,262
    262,2209212255.0,False,but i was still tired i think my circadian rhythm jus pretty unstable,263
    263,2209212256.0,False,no i think it did but not so much anymore,264
    264,2209212256.0,True,does late start for school help at all,265
    265,2209212257.0,False,like i was sleeping @ 11 but now its like 1 am again lmaooo but its ok i take naps,266
    266,2209212257.0,True,:/,267
    267,2209212258.0,True,i know that the female body is different but exercise helps me a lot because it fatigues me and also relaxes me,268
    268,2209212259.0,False,oh ya ive been trying yoga n i used to go on a lot of walks but now i try to jus run a bit bc less time,269
    269,2209212259.0,True,idk i understand its not like necessary to be fixed but idk,270
    270,2209212300.0,False,like i would procrastinate kinda n walk like.. 5 miles…,271
    271,2209212300.0,True,okay so like i don’t wanna be offensive but i hear a lot that girls don’t go on walks bc they scared,272
    272,2209212300.0,True,woahhh,273
    273,2209212301.0,True,do u just not care or,274
    274,2209212301.0,False,ya its fun bc its like u get to jus thinking or not think,275
    275,2209212302.0,True,lol,276
    276,2209212302.0,True,wdym,277
    277,2209212302.0,False,oh ya.. i always forget pepper spray its kinda sketchy but i like walking by myself #yolo,278
    278,2209212302.0,False,n i usually change my times so no one can rly follow me except ive had a few like jump scares,279
    279,2209212302.0,True,wait what,280
    280,2209212303.0,False,& i try to walk against traffic so i can see when a car comes close,281
    281,2209212303.0,False,like once i was walking n this guy passed me but he was walking n he started jogging n it sounded like he was running back to me n i flinched so hard like my heart rate went crazy,282
    282,2209212304.0,False,n then this other time i was @ an intersection n i noticed a guy was looking @ me on the opposite corner n we were kinda headed same direction so i ran like a circle to lose him n went home rq,283
    283,2209212304.0,True,:(,284
    284,2209212304.0,True,tbh i get scared when i’m alone too,285
    285,2209212304.0,False,but its ok its kinda like. thriller,286
    286,2209212305.0,True,so i can’t image what it’s like for others,287
    287,2209212305.0,False,or if i bike then they told me to throw my bike at them 😭😭,288
    288,2209212305.0,False,but idk my friends call me crazy for it,289
    289,2209212306.0,False,but my bike is heavy itll be so hard to pick up but if i can theyd prob break a bone so thats good,290
    290,2209212306.0,True,very true,291
    291,2209212306.0,True,woah,292
    292,2209212306.0,False,or i also hold my phone in a way where i can like smash it into their skull or their crotch 😀,293
    293,2209212307.0,False,"but apparently its not the pepper substance that expires, its the canister. but it still sprays i tried it",294
    294,2209212307.0,False,ya n my pepper spray expired,295
    295,2209212307.0,True,does it not work?,296
    296,2209212307.0,True,oops,297
    297,2209212307.0,True,that would for sure stop anyone,298
    298,2209212308.0,False,um no,299
    299,2209212308.0,False,have u?,300
    300,2209212308.0,True,yeah lol,301
    301,2209212308.0,True,by myself,302
    302,2209212308.0,True,have u ever been pepper sprayed?,303
    303,2209212309.0,True,my mom had it in her drawer when i was super young and i didn’t know what it was,304
    304,2209212310.0,False,did it sting for a long time,305
    305,2209212310.0,False,omg,306
    306,2209212311.0,True,yeahh i tried to wash my eyes and mouth out with water because i sprayed it on my face,307
    307,2209212312.0,True,i thought it was like a scent or something,308
    308,2209212312.0,False,why didnt u jus spray the ground 😭,309
    309,2209212312.0,True,but that will my first and last encounter with pepper spray,310
    310,2209212313.0,True,i was like in elementary school,311
    311,2209212313.0,True,noooo that was before i knew how to smell scents and apply them,312
    312,2209212313.0,False,so u spray cologne on ur face?!,313
    313,2209212314.0,True,i don’t think i was the brightest child,314
    314,2209212314.0,False,i thought it was gonna b like a mist idk but i tried it,315
    315,2209212314.0,True,yeah probbaly,316
    316,2209212314.0,False,i mean. i guess? u could sprayed it jus in the air,317
    317,2209212314.0,False,n its like a straight stream ur supposed to aim it at their eyes,318
    318,2209212314.0,True,yeah,319
    319,2209212315.0,False,its ok lesson learned 👍,320
    320,2209212316.0,False,ya,321
    321,2209212316.0,False,ppl put it on their like car keys n lanyard,322
    322,2209212316.0,True,do you have like those tiny pepper sprays that people carry around,323
    323,2209212316.0,True,yeah,324
    324,2209212317.0,True,do you think we’ll ever reach a place in our lifetime where it shouldn’t be necessary for women to have care so much,325
    325,2209212317.0,False,i dont rly carry it tho i rly should,326
    326,2209212317.0,False,i think ive begun to realize how careless i am ab my safety 🫠,327
    327,2209212318.0,False,mm i dont think its impossible but prob not soon,328
    328,2209212318.0,True,"you should be more careful, i’ve watched like a ton of dateline vids with missing college girls",329
    329,2209212318.0,True,"you should be more careful, i’ve watched like a ton of dateline vids with missing college girls",330
    330,2209212319.0,True,the timing on dobbs v jackson was literally the day we went over it in ap gov over the summer,331
    331,2209212319.0,True,omg yeah,332
    332,2209212319.0,False,esp w like political aspect ab controlling womens bodies i think were kinda regressing @ the moment,333
    333,2209212319.0,False,mayb dif country tho,334
    334,2209212319.0,False,actually idk its kinda universal thing for women,335
    335,2209212320.0,False,like i think in asia its normal to be sh on public transportation n stuff,336
    336,2209212320.0,True,:/,337
    337,2209212321.0,True,i hope it’ll change but tbh our generation doesn’t seem to hopeful about equality,338
    338,2209212321.0,False,omg yea i was so shocked it was kinda ironic bc we were studying roe v wade when itgot overturned,339
    339,2209212321.0,False,so technically the content was false or at least not up to date lmao,340
    340,2209212322.0,False,yea idk i thought our generation was pretty strong on activism but i realized my perception is skewed bc of my surroundings,341
    341,2209212322.0,False,& also like idk its a lot kinda overwhelming to think ab,342
    342,2209212323.0,True,yeah and i think our school is pretty bad but it’s probbaly better compared to rural america,343
    343,2209212323.0,False,yeaaa,344
    344,2209212323.0,False,wait u mean bad as in ppl dont care or what,345
    345,2209212324.0,True,like misogyny and they don’t want equality,346
    346,2209212324.0,False,ohhh,347
    347,2209212325.0,False,i dont think its either but def not good,348
    348,2209212325.0,False,which i can kinda see but tbh i feel like it all just comes down too ppls morals like some ppl jus dont really give a fuck lol,349
    349,2209212325.0,False,i heard from ayala that they perceive our school as very “political” like everyone is split,350
    350,2209212325.0,True,is that good or bad,351
    351,2209212325.0,True,woah,352
    352,2209212326.0,True,yeah,353
    353,2209212326.0,False,i think its jus bc there was like a lot of racist incidents @ our school so obv ppl choose sides n thats how they define themselves,354
    354,2209212327.0,True,i think it’s an education issue tbh,355
    355,2209212328.0,False,yea omg im so upset w the school bc they arent implementing the legislation for menstrual products,356
    356,2209212328.0,False,and i discussed it w mr. rivera & he says basicallly,357
    357,2209212328.0,False,omg sorry this gonna turn into a quick rant,358
    358,2209212328.0,True,no it’s cool i’m interested,359
    359,2209212331.0,False,but basically school districts are getting bonuses for our district chose to distribute it in a way where for instance we get 3% bonus but teachers only get 0.5%,360
    360,2209212335.0,True,is it all of the board or just james na and andrew cruz,361
    361,2209212335.0,False,anyways i asked dr. b like may 2022 when our school would have free period products or whether it was a good idea to fundraise n make a club or something n he was like reassuring me that they had all the boxes of products and stuff they jus need to put the dispensers in in july but it hasnt happened and its alr mid sept,362
    362,2209212335.0,True,damnn,363
    363,2209212336.0,False,so its like a circle yk,364
    364,2209212337.0,False,um idk the specific politicians i think esther is good @ that i just sorta understand the concepts,365
    365,2209212338.0,True,:/,366
    366,2209212338.0,False,and i was rly interested in like sociology so i took a class over summer n i learned that gender is a social construct,367
    367,2209212339.0,False,"so litersllly WHO defines gender as the characteristics of women, men, girls and boys that are socially constructed",368
    368,2209212340.0,False,like i understand the other perspective where theyre concerned ab like safety like there shouldnt be someone in a restroom who intends to like mess around or harm ppl n its kinda undefined still but idk i havent thought ab it that far yet,369
    369,2209212341.0,True,okay but that’s not what they actually believe,370
    370,2209212342.0,True,i mean there’s some people that think that but the ones that have the ability to make the decision just see it as a ideology game,371
    371,2209212343.0,False,yea i just dont rly get why they have to make it all political like why cant students be in best interest rather than some guys political agenda,372
    372,2209212344.0,True,idk esther is on the other side of the boat,373
    373,2209212344.0,True,yeah lol,374
    374,2209212344.0,False,like. i jus wanna learn calculus w out thinking ab all of this 🥲🥲,375
    375,2209212345.0,True,but if there’s anything i can do to help i would like to,376
    376,2209212345.0,False,ya bc shes freaking einstein n alr learned everything,377
    377,2209212345.0,True,i’m pretty sure she gave up on the actual learning part of school a while ago,378
    378,2209212346.0,True,dr b doesn’t want stuff to be public or on social media so if yk…,379
    379,2209212346.0,False,ya idk i think its jus the way it is,380
    380,2209212346.0,False,i feel like i wouldnt wanna go into polysci bc it would b so exhausting,381
    381,2209212347.0,False,like my cousin is doing environmental work in dc n shes jus like. idk the word. kinda hopeless ig,382
    382,2209212348.0,True,everyone that does that stuff has so much passion,383
    383,2209212348.0,True,yeah,384
    384,2209212348.0,True,:(,385
    385,2209212348.0,False,but she still likes it so i think thats all that matters,386
    386,2209212348.0,False,yeaaaa,387
    387,2209212349.0,False,n ill prob figure out from there yk,388
    388,2209212349.0,False,bc i think its interesting & niche so i can get accepted lmao,389
    389,2209212349.0,True,what major are you applying for,390
    390,2209212349.0,True,yeah,391
    391,2209212349.0,False,idk i think i like everything but i dont think anything enough to rly choose,392
    392,2209212349.0,False,wbu,393
    393,2209212349.0,False,im gonna apply for gender studies,394
    394,2209212350.0,False,ya in my ideal world id prob jus b like florist n make bouquets n bake cakes,395
    395,2209212350.0,True,i want to discover something new,396
    396,2209212350.0,False,lmao thats so u,397
    397,2209212350.0,True,i think i’m doing physics,398
    398,2209212350.0,True,do u have like a dream job,399
    399,2209212351.0,True,i’m pretty sure they make a lot of money,400
    400,2209212351.0,True,ux is cool tho,401
    401,2209212351.0,True,whatttt,402
    402,2209212351.0,True,whatttt,403
    403,2209212351.0,False,i feel like id wanna do mayb ux realistically,404
    404,2209212351.0,False,then its like math and psychology,405
    405,2209212351.0,False,yup lmao,406
    406,2209212351.0,False,ya i think so too n it would support my lifestyle,407
    407,2209212352.0,False,ppl tell me they see me doing like political science or liberal arts or business but i think they jus see that i have a more eccentric personality n then assume that,408
    408,2209212353.0,True,yeah,409
    409,2209212354.0,True,you’re smart so you could do computer stuff,410
    410,2209212354.0,True,but like business n stuff is for people that are only social-bodies,411
    411,2209212354.0,False,mhm n i dont think i can live w myself if i exploit ppl,412
    412,2209212355.0,True,uhoh .. ux design is pure exploitation,413
    413,2209212355.0,False,but thats only if my business bc rly big but i wouldnt wanna have a small business bc then i would also suffer,414
    414,2209212355.0,False,👩‍🦯👩‍🦯,415
    415,2209212355.0,False,👩‍🦯👩‍🦯,416
    416,2209212356.0,True,the world is pretty fucked up,417
    417,2209212357.0,False,ok i didnt kno that ab ux,418
    418,2209212357.0,False,i thought its jus like making things like apps easier to use,419
    419,2209212358.0,False,but then whats exploited,420
    420,2209212358.0,False,oh,421
    421,2209212358.0,True,well like facebook and google ad placement is ux design,422
    422,2209212358.0,True,and ux design companies are hired to make websites more productive,423
    423,2209212359.0,False,ohhh,424
    424,2209212359.0,True,well it’s promoting the tracking of your information without your consent,425
    425,2209212359.0,True,becuase in order to collect data to see which designs work you have to be tracked,426
    426,2209220000.0,True,whatever makes the most money,427
    427,2209220000.0,True,that’s the goal,428
    428,2209220000.0,True,yes the stress is on getting into college !,429
    429,2209220000.0,True,okay but even politicans with good intentions get tied up in bad things,430
    430,2209220000.0,False,its ok i have like before sophmore year of college to think,431
    431,2209220000.0,False,hmm idk then,432
    432,2209220001.0,True,work at at a university maybe,433
    433,2209220001.0,True,yeah,434
    434,2209220001.0,False,are u gonna try n b like researcher then,435
    435,2209220001.0,False,do u care ab how much money u make or no,436
    436,2209220002.0,True,ye that’s really cool,437
    437,2209220002.0,True,“live comfortably”,438
    438,2209220002.0,True,i just want to be able to afford everything i want,439
    439,2209220002.0,False,o we have a new pit tech who does environmental research @ calteach n hes in ljke switzerland rn for work,440
    440,2209220003.0,False,didnt like cia release thing ab like astral projection or smthing,441
    441,2209220003.0,False,idk i didnt look into it,442
    442,2209220003.0,True,either east or west coast,443
    443,2209220003.0,True,yeah,444
    444,2209220003.0,True,not in between,445
    445,2209220003.0,True,"idk if i’ll stay in physics, becuase i saw that there’s new research on simulations and i think that’s sounds really cool too",446
    446,2209220003.0,False,oh,447
    447,2209220003.0,False,do u hav preference for east or west coast?,448
    448,2209220004.0,True,yeah but i think there’s a lot that’s waiting to be discovered,449
    449,2209220004.0,False,jus not like midwest,450
    450,2209220004.0,False,oh so east n west are equal,451
    451,2209220005.0,False,like we went to walmart n the ppl were looking @ us weird bc it was like a crowd of asian ppl,452
    452,2209220005.0,False,bruh when we went to dayton it was so boring idk how ppl live in midwest n everyone there is so white,453
    453,2209220005.0,True,yeah,454
    454,2209220006.0,False,mayb like chicago but i dont kno anything else,455
    455,2209220006.0,True,but if u want to live like emma,456
    456,2209220006.0,True,i have to go there for thanksgiving almost every year bc my dads whole family is there and it’s fun for the week i’m there but i couldn’t stay longer,457
    457,2209220007.0,True,chicago is super diverse but it’s still like in the middle of nowhere,458
    458,2209220008.0,True,but it’s like you see the same people every week and everyone gets married with each other,459
    459,2209220008.0,True,i like the idea of boston,460
    460,2209220008.0,False,noo when i picture emma i see like rural european like pride n prejudice grass field,461
    461,2209220009.0,False,ok mayb but lemme jus romanticize it so i can read it w out gagging,462
    462,2209220009.0,False,boston is nice i havent been since like 2017,463
    463,2209220009.0,True,lmao okay,464
    464,2209220010.0,False,i heard ppl there are jus rich n smart n even tho its kinda urban there are still a lot of conservatives,465
    465,2209220010.0,False,oh ya basically,466
    466,2209220010.0,True,i heard that northeast culture is super pretentious though,467
    467,2209220010.0,True,yeah,468
    468,2209220010.0,True,but i think that’s my 2nd best option after ca schools,469
    469,2209220011.0,True,lmao,470
    470,2209220011.0,False,idk i was like 12 when i went so i didnt think ab that i jus liked seeing ben franklin n boats,471
    471,2209220011.0,False,so in state is ur priority?,472
    472,2209220012.0,True,no it’s like a target,473
    473,2209220012.0,True,then uc schools,474
    474,2209220012.0,True,idk yet i think im going to apply boston u and harvard and mit and probbaly another safety school on the east coast just in case,475
    475,2209220012.0,False,bu is a safety ?!,476
    476,2209220013.0,False,i visited tho its rly pretty i jus think i need to b super urban,477
    477,2209220013.0,False,otherwise i rly wanna go to barnard like thats my #1 rn,478
    478,2209220013.0,False,i was thinking wellesley for boston but i think it might b too far out,479
    479,2209220013.0,True,hbu,480
    480,2209220013.0,True,idk,481
    481,2209220013.0,False,ohhhh ok lmao,482
    482,2209220014.0,False,nyu is nice idk if i can afford it but i think i have the personality for new york,483
    483,2209220014.0,True,how many minutes is it away from the city,484
    484,2209220014.0,False,i think like 30,485
    485,2209220015.0,False,ya like spring 2018,486
    486,2209220015.0,False,@ least for a few years until im either rich or broke asf,487
    487,2209220015.0,True,have u been to new york before,488
    488,2209220016.0,False,i think the environment jus suits me like i wanna b around art all the time n i like walking n barnard rly prides itself in their activism and humanitarianism,489
    489,2209220016.0,False,n my godmother lives there,490
    490,2209220016.0,True,do u fs want to get away from california?,491
    491,2209220016.0,True,woah that’s cool,492
    492,2209220017.0,True,that’s pretty cool,493
    493,2209220017.0,False,but she says its need based financial aid so for her it was same as going to uc financially,494
    494,2209220017.0,False,well thats what i want but well see i talked to this girl who used to b in hsa n shes freshman @ barnard rn,495
    495,2209220017.0,False,plus id technically get degree from columbia,496
    496,2209220018.0,False,nyu is same they dont do merit based ig n she said she applied to scholariships but she didnt grt any. idek how to apply for scholarships,497
    497,2209220019.0,True,idk i’m scared but u seem pretty excited for a new life,498
    498,2209220019.0,True,yeah,499
    499,2209220019.0,False,otherwise east coast mayb brown or uchicago i jus don kno well see once i grt accepted,500
    500,2209220020.0,False,i might b too ambitious or overconfident but idk i think i can figure smthing out if anything doesnt work,501
    501,2209220020.0,False,yea lol i wanna get out of here alr,502
    502,2209220021.0,False,are u jus scared to like b independent?,503
    503,2209220021.0,True,like i don’t want to overwhelm myself so much that i quit,504
    504,2209220021.0,True,well i don’t want to get too far ahead of myself,505
    505,2209220023.0,True,also for scholarships :,506
    506,2209220025.0,False,ohh yea ig idk i think i jus like independence n idrk what i like so i wouldnt rly burn out yet,507
    507,2209220025.0,False,or mayb opposite like im kinda burnt out now so i wanna start over,508
    508,2209220028.0,True,i think everyone that is passionate enough about what they do and they care enough to put high quality effort will be sucessful,509
    509,2209220028.0,True,i hope it all goes well then,510
    510,2209220028.0,True,that’s cool,511
    511,2209220035.0,True,no problem!,512`;
    
    // const parsedMessages = parseCSV(csvData);
    // console.log(parsedMessages);
    return (
        <div>
            <button onClick={() => {
                const theData = parseCSV(csvData)
                for (let i = 0; i < theData.length; i++) {
                    insertMessages({ fromTarget: theData[i].fromTarget, content: theData[i].content, timeStamp: BigInt(i + 1)})
                }
            }}>
                CLICK ME
            </button>
        </div>
    )
}