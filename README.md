<div align="center">
<p align="center"><img src="./logo.gif" align="center" /></p>
<p align="center"><h2 align="center">CRAZYMOJI</h2></p>
<p align="center"> Exports All The Git Emojis As Json
</div>

## Why Use?

Why Keep Referencing Cheatsheets To Find Your Emojis? Simply Use This Module To
Export 'Em All :sunglasses:

## Install

Run `npm install crazymoji` then add `const emoji = require('crazymoji)` to your
working file :wink:

## Usage

```js
const emojis = crazymoji.get_raw();
crazymoji.emojify(emojis["Smileys & Emotion"]["Monkey Face"]);
```

=> [ ':see_no_evil:', ':hear_no_evil:', ':speak_no_evil:' ]

```js
emoji.categories();
/* => 
[
  'Smileys & Emotion',
  'People & Body',
  'Animals & Nature',
  'Food & Drink',
  'Travel & Places',
  'Activities',
  'Objects',
  'Symbols',
  'Flags',
  'GitHub Custom Emoji'
]
*/
```

## API

## Modules

<dl>
<dt><a href="#module_flattern">flattern</a> ⇒ <code>Array.&lt;string&gt;</code></dt>
<dd><p>Flatter/Merge a nested array of strings</p>
</dd>
<dt><a href="#module_categories">categories</a> ⇒ <code>Array</code></dt>
<dd><p>Get the list of categories of emojis</p>
</dd>
<dt><a href="#module_sub_categories">sub_categories</a> ⇒ <code>Array.&lt;string&gt;</code></dt>
<dd><p>Get sub-categories of emojis</p>
</dd>
<dt><a href="#module_filter_by_category">filter_by_category</a> ⇒ <code>object</code></dt>
<dd><p>Filter emojis by categories</p>
</dd>
<dt><a href="#module_emojify">emojify</a> ⇒ <code>array</code></dt>
<dd><p>Emojify an array</p>
</dd>
</dl>

<a name="module_flattern"></a>

## flattern ⇒ <code>Array.&lt;string&gt;</code>

Flatter/Merge a nested array of strings

**Returns**: <code>Array.&lt;string&gt;</code> - - Merged/Flatter array

| Param        | Type                              | Description                           |
| ------------ | --------------------------------- | ------------------------------------- |
| nested_array | <code>Array.&lt;string&gt;</code> | Nested array of category/sub_category |

<a name="module_flattern.get_raw"></a>

### flattern.get_raw() ⇒ <code>Object</code>

Get the RAW object containing all the emojis

**Kind**: static method of [<code>flattern</code>](#module_flattern)  
**Returns**: <code>Object</code> - - The RAW data of all the emojis  
<a name="module_categories"></a>

## categories ⇒ <code>Array</code>

Get the list of categories of emojis

**Returns**: <code>Array</code> - string - List of emoji categories  
<a name="module_sub_categories"></a>

## sub_categories ⇒ <code>Array.&lt;string&gt;</code>

Get sub-categories of emojis

**Returns**: <code>Array.&lt;string&gt;</code> - - List of sub categories with
their parent categories  
<a name="module_filter_by_category"></a>

## filter_by_category ⇒ <code>object</code>

Filter emojis by categories

**Returns**: <code>object</code> - string - List of emojis filtered by the given
category

| Param    | Type                | Description               |
| -------- | ------------------- | ------------------------- |
| category | <code>string</code> | Exact emoji category name |

<a name="module_emojify"></a>

## emojify ⇒ <code>array</code>

Emojify an array

**Returns**: <code>array</code> - string

| Param        | Type               | Description      |
| ------------ | ------------------ | ---------------- |
| sub_category | <code>Array</code> | The sub category |

## Looking For Emojis?

## Smileys & Emotion

### Face Smiling

:grinning: :smiley: :smile: :grin: :laughing: :satisfied: :sweat_smile: :rofl:
:joy: :slightly_smiling_face: :upside_down_face: :wink: :blush: :innocent:

### Face Affection

:smiling_face_with_three_hearts: :heart_eyes: :star_struck: :kissing_heart:
:kissing: :relaxed: :kissing_closed_eyes: :kissing_smiling_eyes:

### Face Tongue

:yum: :stuck_out_tongue: :stuck_out_tongue_winking_eye: :zany_face:
:stuck_out_tongue_closed_eyes: :money_mouth_face:

### Face Hand

:hugs: :hand_over_mouth: :shushing_face: :thinking:

### Face Neutral Skeptical

:zipper_mouth_face: :raised_eyebrow: :neutral_face: :expressionless: :no_mouth:
:smirk: :unamused: :roll_eyes: :grimacing: :lying_face:

### Face Sleepy

:relieved: :pensive: :sleepy: :drooling_face: :sleeping:

### Face Unwell

:mask: :face_with_thermometer: :face_with_head_bandage: :nauseated_face:
:vomiting_face: :sneezing_face: :hot_face: :cold_face: :woozy_face: :dizzy_face:
:exploding_head:

### Face Hat

:cowboy_hat_face: :partying_face:

### Face Glasses

:sunglasses: :nerd_face: :monocle_face:

### Face Concerned

:confused: :worried: :slightly_frowning_face: :frowning_face: :open_mouth:
:hushed: :astonished: :flushed: :pleading_face: :frowning: :anguished: :fearful:
:cold_sweat: :disappointed_relieved: :cry: :sob: :scream: :confounded:
:persevere: :disappointed: :sweat: :weary: :tired_face: :yawning_face:

### Face Negative

:triumph: :pout: :rage: :angry: :cursing_face: :smiling_imp: :imp: :skull:
:skull_and_crossbones:

### Face Costume

:hankey: :poop: :shit: :clown_face: :japanese_ogre: :japanese_goblin: :ghost:
:alien: :space_invader: :robot:

### Cat Face

:smiley_cat: :smile_cat: :joy_cat: :heart_eyes_cat: :smirk_cat: :kissing_cat:
:scream_cat: :crying_cat_face: :pouting_cat:

### Monkey Face

:see_no_evil: :hear_no_evil: :speak_no_evil:

### Emotion

:kiss: :love_letter: :cupid: :gift_heart: :sparkling_heart: :heartpulse:
:heartbeat: :revolving_hearts: :two_hearts: :heart_decoration:
:heavy_heart_exclamation: :broken_heart: :heart: :orange_heart: :yellow_heart:
:green_heart: :blue_heart: :purple_heart: :brown_heart: :black_heart:
:white_heart: :100: :anger: :boom: :collision: :dizzy: :sweat_drops: :dash:
:hole: :bomb: :speech_balloon: :eye_speech_bubble: :left_speech_bubble:
:right_anger_bubble: :thought_balloon: :zzz:

## People & Body

### Hand Fingers Open

:wave: :raised_back_of_hand: :raised_hand_with_fingers_splayed: :hand:
:raised_hand: :vulcan_salute:

### Hand Fingers Partial

:ok_hand: :pinching_hand: :v: :crossed_fingers: :love_you_gesture: :metal:
:call_me_hand:

### Hand Single Finger

:point_left: :point_right: :point_up_2: :fu: :middle_finger: :point_down:
:point_up:

### Hand Fingers Closed

:+1: :thumbsup: :-1: :thumbsdown: :fist: :fist_raised: :facepunch:
:fist_oncoming: :punch: :fist_left: :fist_right:

### Hands

:clap: :raised_hands: :open_hands: :palms_up_together: :handshake: :pray:

### Hand Prop

:writing_hand: :nail_care: :selfie:

### Body Parts

:muscle: :mechanical_arm: :mechanical_leg: :leg: :foot: :ear:
:ear_with_hearing_aid: :nose: :brain: :tooth: :bone: :eyes: :eye: :tongue:
:lips:

### Person

:baby: :child: :boy: :girl: :adult: :blond_haired_person: :man: :bearded_person:
:red_haired_man: :curly_haired_man: :white_haired_man: :bald_man: :woman:
:red_haired_woman: :person_red_hair: :curly_haired_woman: :person_curly_hair:
:white_haired_woman: :person_white_hair: :bald_woman: :person_bald:
:blond_haired_woman: :blonde_woman: :blond_haired_man: :older_adult: :older_man:
:older_woman:

### Person Gesture

:frowning_person: :frowning_man: :frowning_woman: :pouting_face: :pouting_man:
:pouting_woman: :no_good: :ng_man: :no_good_man: :ng_woman: :no_good_woman:
:ok_person: :ok_man: :ok_woman: :information_desk_person: :tipping_hand_person:
:sassy_man: :tipping_hand_man: :sassy_woman: :tipping_hand_woman: :raising_hand:
:raising_hand_man: :raising_hand_woman: :deaf_person: :deaf_man: :deaf_woman:
:bow: :bowing_man: :bowing_woman: :facepalm: :man_facepalming:
:woman_facepalming: :shrug: :man_shrugging: :woman_shrugging:

### Person Role

:health_worker: :man_health_worker: :woman_health_worker: :student:
:man_student: :woman_student: :teacher: :man_teacher: :woman_teacher: :judge:
:man_judge: :woman_judge: :farmer: :man_farmer: :woman_farmer: :cook: :man_cook:
:woman_cook: :mechanic: :man_mechanic: :woman_mechanic: :factory_worker:
:man_factory_worker: :woman_factory_worker: :office_worker: :man_office_worker:
:woman_office_worker: :scientist: :man_scientist: :woman_scientist:
:technologist: :man_technologist: :woman_technologist: :singer: :man_singer:
:woman_singer: :artist: :man_artist: :woman_artist: :pilot: :man_pilot:
:woman_pilot: :astronaut: :man_astronaut: :woman_astronaut: :firefighter:
:man_firefighter: :woman_firefighter: :cop: :police_officer: :policeman:
:policewoman: :detective: :male_detective: :female_detective: :guard:
:guardsman: :guardswoman: :construction_worker: :construction_worker_man:
:construction_worker_woman: :prince: :princess: :person_with_turban:
:man_with_turban: :woman_with_turban: :man_with_gua_pi_mao:
:woman_with_headscarf: :man_in_tuxedo: :bride_with_veil: :pregnant_woman:
:breast_feeding:

### Person Fantasy

:angel: :santa: :mrs_claus: :superhero: :superhero_man: :superhero_woman:
:supervillain: :supervillain_man: :supervillain_woman: :mage: :mage_man:
:mage_woman: :fairy: :fairy_man: :fairy_woman: :vampire: :vampire_man:
:vampire_woman: :merperson: :merman: :mermaid: :elf: :elf_man: :elf_woman:
:genie: :genie_man: :genie_woman: :zombie: :zombie_man: :zombie_woman:

### Person Activity

:massage: :massage_man: :massage_woman: :haircut: :haircut_man: :haircut_woman:
:walking: :walking_man: :walking_woman: :standing_person: :standing_man:
:standing_woman: :kneeling_person: :kneeling_man: :kneeling_woman:
:person_with_probing_cane: :man_with_probing_cane: :woman_with_probing_cane:
:person_in_motorized_wheelchair: :man_in_motorized_wheelchair:
:woman_in_motorized_wheelchair: :person_in_manual_wheelchair:
:man_in_manual_wheelchair: :woman_in_manual_wheelchair: :runner: :running:
:running_man: :running_woman: :dancer: :woman_dancing: :man_dancing:
:business_suit_levitating: :dancers: :dancing_men: :dancing_women:
:sauna_person: :sauna_man: :sauna_woman: :climbing: :climbing_man:
:climbing_woman:

### Person Sport

:person_fencing: :horse_racing: :skier: :snowboarder: :golfing: :golfing_man:
:golfing_woman: :surfer: :surfing_man: :surfing_woman: :rowboat: :rowing_man:
:rowing_woman: :swimmer: :swimming_man: :swimming_woman: :bouncing_ball_person:
:basketball_man: :bouncing_ball_man: :basketball_woman: :bouncing_ball_woman:
:weight_lifting: :weight_lifting_man: :weight_lifting_woman: :bicyclist:
:biking_man: :biking_woman: :mountain_bicyclist: :mountain_biking_man:
:mountain_biking_woman: :cartwheeling: :man_cartwheeling: :woman_cartwheeling:
:wrestling: :men_wrestling: :women_wrestling: :water_polo:
:man_playing_water_polo: :woman_playing_water_polo: :handball_person:
:man_playing_handball: :woman_playing_handball: :juggling_person: :man_juggling:
:woman_juggling:

### Person Resting

:lotus_position: :lotus_position_man: :lotus_position_woman: :bath:
:sleeping_bed:

### Family

:people_holding_hands: :two_women_holding_hands: :couple:
:two_men_holding_hands: :couplekiss: :couplekiss_man_woman: :couplekiss_man_man:
:couplekiss_woman_woman: :couple_with_heart: :couple_with_heart_woman_man:
:couple_with_heart_man_man: :couple_with_heart_woman_woman: :family:
:family_man_woman_boy: :family_man_woman_girl: :family_man_woman_girl_boy:
:family_man_woman_boy_boy: :family_man_woman_girl_girl: :family_man_man_boy:
:family_man_man_girl: :family_man_man_girl_boy: :family_man_man_boy_boy:
:family_man_man_girl_girl: :family_woman_woman_boy: :family_woman_woman_girl:
:family_woman_woman_girl_boy: :family_woman_woman_boy_boy:
:family_woman_woman_girl_girl: :family_man_boy: :family_man_boy_boy:
:family_man_girl: :family_man_girl_boy: :family_man_girl_girl:
:family_woman_boy: :family_woman_boy_boy: :family_woman_girl:
:family_woman_girl_boy: :family_woman_girl_girl:

### Person Symbol

:speaking_head: :bust_in_silhouette: :busts_in_silhouette: :footprints:

## Animals & Nature

### Animal Mammal

:monkey_face: :monkey: :gorilla: :orangutan: :dog: :dog2: :guide_dog:
:service_dog: :poodle: :wolf: :fox_face: :raccoon: :cat: :cat2: :lion: :tiger:
:tiger2: :leopard: :horse: :racehorse: :unicorn: :zebra: :deer: :cow: :ox:
:water_buffalo: :cow2: :pig: :pig2: :boar: :pig_nose: :ram: :sheep: :goat:
:dromedary_camel: :camel: :llama: :giraffe: :elephant: :rhinoceros:
:hippopotamus: :mouse: :mouse2: :rat: :hamster: :rabbit: :rabbit2: :chipmunk:
:hedgehog: :bat: :bear: :koala: :panda_face: :sloth: :otter: :skunk: :kangaroo:
:badger: :feet: :paw_prints:

### Animal Bird

:turkey: :chicken: :rooster: :hatching_chick: :baby_chick: :hatched_chick:
:bird: :penguin: :dove: :eagle: :duck: :swan: :owl: :flamingo: :peacock:
:parrot:

### Animal Amphibian

:frog:

### Animal Reptile

:crocodile: :turtle: :lizard: :snake: :dragon_face: :dragon: :sauropod: :t-rex:

### Animal Marine

:whale: :whale2: :dolphin: :flipper: :fish: :tropical_fish: :blowfish: :shark:
:octopus: :shell:

### Animal Bug

:snail: :butterfly: :bug: :ant: :bee: :honeybee: :beetle: :cricket: :spider:
:spider_web: :scorpion: :mosquito: :microbe:

### Plant Flower

:bouquet: :cherry_blossom: :white_flower: :rosette: :rose: :wilted_flower:
:hibiscus: :sunflower: :blossom: :tulip:

### Plant Other

:seedling: :evergreen_tree: :deciduous_tree: :palm_tree: :cactus: :ear_of_rice:
:herb: :shamrock: :four_leaf_clover: :maple_leaf: :fallen_leaf: :leaves:

## Food & Drink

### Food Fruit

:grapes: :melon: :watermelon: :mandarin: :orange: :tangerine: :lemon: :banana:
:pineapple: :mango: :apple: :green_apple: :pear: :peach: :cherries: :strawberry:
:kiwi_fruit: :tomato: :coconut:

### Food Vegetable

:avocado: :eggplant: :potato: :carrot: :corn: :hot_pepper: :cucumber:
:leafy_green: :broccoli: :garlic: :onion: :mushroom: :peanuts: :chestnut:

### Food Prepared

:bread: :croissant: :baguette_bread: :pretzel: :bagel: :pancakes: :waffle:
:cheese: :meat_on_bone: :poultry_leg: :cut_of_meat: :bacon: :hamburger: :fries:
:pizza: :hotdog: :sandwich: :taco: :burrito: :stuffed_flatbread: :falafel: :egg:
:fried_egg: :shallow_pan_of_food: :stew: :bowl_with_spoon: :green_salad:
:popcorn: :butter: :salt: :canned_food:

### Food Asian

:bento: :rice_cracker: :rice_ball: :rice: :curry: :ramen: :spaghetti:
:sweet_potato: :oden: :sushi: :fried_shrimp: :fish_cake: :moon_cake: :dango:
:dumpling: :fortune_cookie: :takeout_box:

### Food Marine

:crab: :lobster: :shrimp: :squid: :oyster:

### Food Sweet

:icecream: :shaved_ice: :ice_cream: :doughnut: :cookie: :birthday: :cake:
:cupcake: :pie: :chocolate_bar: :candy: :lollipop: :custard: :honey_pot:

### Drink

:baby_bottle: :milk_glass: :coffee: :tea: :sake: :champagne: :wine_glass:
:cocktail: :tropical_drink: :beer: :beers: :clinking_glasses: :tumbler_glass:
:cup_with_straw: :beverage_box: :mate: :ice_cube:

### Dishware

:chopsticks: :plate_with_cutlery: :fork_and_knife: :spoon: :hocho: :knife:
:amphora:

## Travel & Places

### Place Map

:earth_africa: :earth_americas: :earth_asia: :globe_with_meridians: :world_map:
:japan: :compass:

### Place Geographic

:mountain_snow: :mountain: :volcano: :mount_fuji: :camping: :beach_umbrella:
:desert: :desert_island: :national_park:

### Place Building

:stadium: :classical_building: :building_construction: :bricks: :houses:
:derelict_house: :house: :house_with_garden: :office: :post_office:
:european_post_office: :hospital: :bank: :hotel: :love_hotel:
:convenience_store: :school: :department_store: :factory: :japanese_castle:
:european_castle: :wedding: :tokyo_tower: :statue_of_liberty:

### Place Religious

:church: :mosque: :hindu_temple: :synagogue: :shinto_shrine: :kaaba:

### Place Other

:fountain: :tent: :foggy: :night_with_stars: :cityscape:
:sunrise_over_mountains: :sunrise: :city_sunset: :city_sunrise:
:bridge_at_night: :hotsprings: :carousel_horse: :ferris_wheel: :roller_coaster:
:barber: :circus_tent:

### Transport Ground

:steam_locomotive: :railway_car: :bullettrain_side: :bullettrain_front: :train2:
:metro: :light_rail: :station: :tram: :monorail: :mountain_railway: :train:
:bus: :oncoming_bus: :trolleybus: :minibus: :ambulance: :fire_engine:
:police_car: :oncoming_police_car: :taxi: :oncoming_taxi: :car: :red_car:
:oncoming_automobile: :blue_car: :truck: :articulated_lorry: :tractor:
:racing_car: :motorcycle: :motor_scooter: :manual_wheelchair:
:motorized_wheelchair: :auto_rickshaw: :bike: :kick_scooter: :skateboard:
:busstop: :motorway: :railway_track: :oil_drum: :fuelpump: :rotating_light:
:traffic_light: :vertical_traffic_light: :stop_sign: :construction:

### Transport Water

:anchor: :boat: :sailboat: :canoe: :speedboat: :passenger_ship: :ferry:
:motor_boat: :ship:

### Transport Air

:airplane: :small_airplane: :flight_departure: :flight_arrival: :parachute:
:seat: :helicopter: :suspension_railway: :mountain_cableway: :aerial_tramway:
:artificial_satellite: :rocket: :flying_saucer:

### Hotel

:bellhop_bell: :luggage:

### Time

:hourglass: :hourglass_flowing_sand: :watch: :alarm_clock: :stopwatch:
:timer_clock: :mantelpiece_clock: :clock12: :clock1230: :clock1: :clock130:
:clock2: :clock230: :clock3: :clock330: :clock4: :clock430: :clock5: :clock530:
:clock6: :clock630: :clock7: :clock730: :clock8: :clock830: :clock9: :clock930:
:clock10: :clock1030: :clock11: :clock1130:

### Sky & Weather

:new_moon: :waxing_crescent_moon: :first_quarter_moon: :moon:
:waxing_gibbous_moon: :full_moon: :waning_gibbous_moon: :last_quarter_moon:
:waning_crescent_moon: :crescent_moon: :new_moon_with_face:
:first_quarter_moon_with_face: :last_quarter_moon_with_face: :thermometer:
:sunny: :full_moon_with_face: :sun_with_face: :ringed_planet: :star: :star2:
:stars: :milky_way: :cloud: :partly_sunny: :cloud_with_lightning_and_rain:
:sun_behind_small_cloud: :sun_behind_large_cloud: :sun_behind_rain_cloud:
:cloud_with_rain: :cloud_with_snow: :cloud_with_lightning: :tornado: :fog:
:wind_face: :cyclone: :rainbow: :closed_umbrella: :open_umbrella: :umbrella:
:parasol_on_ground: :zap: :snowflake: :snowman_with_snow: :snowman: :comet:
:fire: :droplet: :ocean:

## Activities

### Event

:jack_o_lantern: :christmas_tree: :fireworks: :sparkler: :firecracker:
:sparkles: :balloon: :tada: :confetti_ball: :tanabata_tree: :bamboo: :dolls:
:flags: :wind_chime: :rice_scene: :red_envelope: :ribbon: :gift:
:reminder_ribbon: :tickets: :ticket:

### Award Medal

:medal_military: :trophy: :medal_sports: :1st_place_medal: :2nd_place_medal:
:3rd_place_medal:

### Sport

:soccer: :baseball: :softball: :basketball: :volleyball: :football:
:rugby_football: :tennis: :flying_disc: :bowling: :cricket_game: :field_hockey:
:ice_hockey: :lacrosse: :ping_pong: :badminton: :boxing_glove:
:martial_arts_uniform: :goal_net: :golf: :ice_skate: :fishing_pole_and_fish:
:diving_mask: :running_shirt_with_sash: :ski: :sled: :curling_stone:

### Game

:dart: :yo_yo: :kite: :8ball: :crystal_ball: :nazar_amulet: :video_game:
:joystick: :slot_machine: :game_die: :jigsaw: :teddy_bear: :spades: :hearts:
:diamonds: :clubs: :chess_pawn: :black_joker: :mahjong: :flower_playing_cards:

### Arts & Crafts

:performing_arts: :framed_picture: :art: :thread: :yarn:

## Objects

### Clothing

:eyeglasses: :dark_sunglasses: :goggles: :lab_coat: :safety_vest: :necktie:
:shirt: :tshirt: :jeans: :scarf: :gloves: :coat: :socks: :dress: :kimono: :sari:
:one_piece_swimsuit: :swim_brief: :shorts: :bikini: :womans_clothes: :purse:
:handbag: :pouch: :shopping: :school_satchel: :mans_shoe: :shoe: :athletic_shoe:
:hiking_boot: :flat_shoe: :high_heel: :sandal: :ballet_shoes: :boot: :crown:
:womans_hat: :tophat: :mortar_board: :billed_cap: :rescue_worker_helmet:
:prayer_beads: :lipstick: :ring: :gem:

### Sound

:mute: :speaker: :sound: :loud_sound: :loudspeaker: :mega: :postal_horn: :bell:
:no_bell:

### Music

:musical_score: :musical_note: :notes: :studio_microphone: :level_slider:
:control_knobs: :microphone: :headphones: :radio:

### Musical Instrument

:saxophone: :guitar: :musical_keyboard: :trumpet: :violin: :banjo: :drum:

### Phone

:iphone: :calling: :phone: :telephone: :telephone_receiver: :pager: :fax:

### Computer

:battery: :electric_plug: :computer: :desktop_computer: :printer: :keyboard:
:computer_mouse: :trackball: :minidisc: :floppy_disk: :cd: :dvd: :abacus:

### Light & Video

:movie_camera: :film_strip: :film_projector: :clapper: :tv: :camera:
:camera_flash: :video_camera: :vhs: :mag: :mag_right: :candle: :bulb:
:flashlight: :izakaya_lantern: :lantern: :diya_lamp:

### Book Paper

:notebook_with_decorative_cover: :closed_book: :book: :open_book: :green_book:
:blue_book: :orange_book: :books: :notebook: :ledger: :page_with_curl: :scroll:
:page_facing_up: :newspaper: :newspaper_roll: :bookmark_tabs: :bookmark: :label:

### Money

:moneybag: :yen: :dollar: :euro: :pound: :money_with_wings: :credit_card:
:receipt: :chart:

### Mail

:email: :envelope: :e-mail: :incoming_envelope: :envelope_with_arrow:
:outbox_tray: :inbox_tray: :package: :mailbox: :mailbox_closed:
:mailbox_with_mail: :mailbox_with_no_mail: :postbox: :ballot_box:

### Writing

:pencil2: :black_nib: :fountain_pen: :pen: :paintbrush: :crayon: :memo: :pencil:

### Office

:briefcase: :file_folder: :open_file_folder: :card_index_dividers: :date:
:calendar: :spiral_notepad: :spiral_calendar: :card_index:
:chart_with_upwards_trend: :chart_with_downwards_trend: :bar_chart: :clipboard:
:pushpin: :round_pushpin: :paperclip: :paperclips: :straight_ruler:
:triangular_ruler: :scissors: :card_file_box: :file_cabinet: :wastebasket:

### Lock

:lock: :unlock: :lock_with_ink_pen: :closed_lock_with_key: :key: :old_key:

### Tool

:hammer: :axe: :pick: :hammer_and_pick: :hammer_and_wrench: :dagger:
:crossed_swords: :gun: :bow_and_arrow: :shield: :wrench: :nut_and_bolt: :gear:
:clamp: :balance_scale: :probing_cane: :link: :chains: :toolbox: :magnet:

### Science

:alembic: :test_tube: :petri_dish: :dna: :microscope: :telescope: :satellite:

### Medical

:syringe: :drop_of_blood: :pill: :adhesive_bandage: :stethoscope:

### Household

:door: :bed: :couch_and_lamp: :chair: :toilet: :shower: :bathtub: :razor:
:lotion_bottle: :safety_pin: :broom: :basket: :roll_of_paper: :soap: :sponge:
:fire_extinguisher: :shopping_cart:

### Other Object

:smoking: :coffin: :funeral_urn: :moyai:

## Symbols

### Transport Sign

:atm: :put_litter_in_its_place: :potable_water: :wheelchair: :mens: :womens:
:restroom: :baby_symbol: :wc: :passport_control: :customs: :baggage_claim:
:left_luggage:

### Warning

:warning: :children_crossing: :no_entry: :no_entry_sign: :no_bicycles:
:no_smoking: :do_not_litter: :non-potable_water: :no_pedestrians:
:no_mobile_phones: :underage: :radioactive: :biohazard:

### Arrow

:arrow_up: :arrow_upper_right: :arrow_right: :arrow_lower_right: :arrow_down:
:arrow_lower_left: :arrow_left: :arrow_upper_left: :arrow_up_down:
:left_right_arrow: :leftwards_arrow_with_hook: :arrow_right_hook:
:arrow_heading_up: :arrow_heading_down: :arrows_clockwise:
:arrows_counterclockwise: :back: :end: :on: :soon: :top:

### Religion

:place_of_worship: :atom_symbol: :om: :star_of_david: :wheel_of_dharma:
:yin_yang: :latin_cross: :orthodox_cross: :star_and_crescent: :peace_symbol:
:menorah: :six_pointed_star:

### Zodiac

:aries: :taurus: :gemini: :cancer: :leo: :virgo: :libra: :scorpius:
:sagittarius: :capricorn: :aquarius: :pisces: :ophiuchus:

### Av Symbol

:twisted_rightwards_arrows: :repeat: :repeat_one: :arrow_forward: :fast_forward:
:next_track_button: :play_or_pause_button: :arrow_backward: :rewind:
:previous_track_button: :arrow_up_small: :arrow_double_up: :arrow_down_small:
:arrow_double_down: :pause_button: :stop_button: :record_button: :eject_button:
:cinema: :low_brightness: :high_brightness: :signal_strength: :vibration_mode:
:mobile_phone_off:

### Gender

:female_sign: :male_sign:

### Math

:heavy_multiplication_x: :heavy_plus_sign: :heavy_minus_sign:
:heavy_division_sign: :infinity:

### Punctuation

:bangbang: :interrobang: :question: :grey_question: :grey_exclamation:
:exclamation: :heavy_exclamation_mark: :wavy_dash:

### Currency

:currency_exchange: :heavy_dollar_sign:

### Other Symbol

:medical_symbol: :recycle: :fleur_de_lis: :trident: :name_badge: :beginner: :o:
:white_check_mark: :ballot_box_with_check: :heavy_check_mark: :x:
:negative_squared_cross_mark: :curly_loop: :loop: :part_alternation_mark:
:eight_spoked_asterisk: :eight_pointed_black_star: :sparkle: :copyright:
:registered: :tm:

### Keycap

:hash: :asterisk: :zero: :one: :two: :three: :four: :five: :six: :seven: :eight:
:nine: :keycap_ten:

### Alphanum

:capital_abcd: :abcd: :1234: :symbols: :abc: :a: :ab: :b: :cl: :cool: :free:
:information_source: :id: :m: :new: :ng: :o2: :ok: :parking: :sos: :up: :vs:
:koko: :sa: :u6708: :u6709: :u6307: :ideograph_advantage: :u5272: :u7121:
:u7981: :accept: :u7533: :u5408: :u7a7a: :congratulations: :secret: :u55b6:
:u6e80:

### Geometric

:red_circle: :orange_circle: :yellow_circle: :green_circle: :large_blue_circle:
:purple_circle: :brown_circle: :black_circle: :white_circle: :red_square:
:orange_square: :yellow_square: :green_square: :blue_square: :purple_square:
:brown_square: :black_large_square: :white_large_square: :black_medium_square:
:white_medium_square: :black_medium_small_square: :white_medium_small_square:
:black_small_square: :white_small_square: :large_orange_diamond:
:large_blue_diamond: :small_orange_diamond: :small_blue_diamond:
:small_red_triangle: :small_red_triangle_down: :diamond_shape_with_a_dot_inside:
:radio_button: :white_square_button: :black_square_button:

## Flags

### Flag

:checkered_flag: :triangular_flag_on_post: :crossed_flags: :black_flag:
:white_flag: :rainbow_flag: :pirate_flag:

### Country Flag

:ascension_island: :andorra: :united_arab_emirates: :afghanistan:
:antigua_barbuda: :anguilla: :albania: :armenia: :angola: :antarctica:
:argentina: :american_samoa: :austria: :australia: :aruba: :aland_islands:
:azerbaijan: :bosnia_herzegovina: :barbados: :bangladesh: :belgium:
:burkina_faso: :bulgaria: :bahrain: :burundi: :benin: :st_barthelemy: :bermuda:
:brunei: :bolivia: :caribbean_netherlands: :brazil: :bahamas: :bhutan:
:bouvet_island: :botswana: :belarus: :belize: :canada: :cocos_islands:
:congo_kinshasa: :central_african_republic: :congo_brazzaville: :switzerland:
:cote_divoire: :cook_islands: :chile: :cameroon: :cn: :colombia:
:clipperton_island: :costa_rica: :cuba: :cape_verde: :curacao:
:christmas_island: :cyprus: :czech_republic: :de: :diego_garcia: :djibouti:
:denmark: :dominica: :dominican_republic: :algeria: :ceuta_melilla: :ecuador:
:estonia: :egypt: :western_sahara: :eritrea: :es: :ethiopia: :eu:
:european_union: :finland: :fiji: :falkland_islands: :micronesia:
:faroe_islands: :fr: :gabon: :gb: :uk: :grenada: :georgia: :french_guiana:
:guernsey: :ghana: :gibraltar: :greenland: :gambia: :guinea: :guadeloupe:
:equatorial_guinea: :greece: :south_georgia_south_sandwich_islands: :guatemala:
:guam: :guinea_bissau: :guyana: :hong_kong: :heard_mcdonald_islands: :honduras:
:croatia: :haiti: :hungary: :canary_islands: :indonesia: :ireland: :israel:
:isle_of_man: :india: :british_indian_ocean_territory: :iraq: :iran: :iceland:
:it: :jersey: :jamaica: :jordan: :jp: :kenya: :kyrgyzstan: :cambodia: :kiribati:
:comoros: :st_kitts_nevis: :north_korea: :kr: :kuwait: :cayman_islands:
:kazakhstan: :laos: :lebanon: :st_lucia: :liechtenstein: :sri_lanka: :liberia:
:lesotho: :lithuania: :luxembourg: :latvia: :libya: :morocco: :monaco: :moldova:
:montenegro: :st_martin: :madagascar: :marshall_islands: :macedonia: :mali:
:myanmar: :mongolia: :macau: :northern_mariana_islands: :martinique:
:mauritania: :montserrat: :malta: :mauritius: :maldives: :malawi: :mexico:
:malaysia: :mozambique: :namibia: :new_caledonia: :niger: :norfolk_island:
:nigeria: :nicaragua: :netherlands: :norway: :nepal: :nauru: :niue:
:new_zealand: :oman: :panama: :peru: :french_polynesia: :papua_new_guinea:
:philippines: :pakistan: :poland: :st_pierre_miquelon: :pitcairn_islands:
:puerto_rico: :palestinian_territories: :portugal: :palau: :paraguay: :qatar:
:reunion: :romania: :serbia: :ru: :rwanda: :saudi_arabia: :solomon_islands:
:seychelles: :sudan: :sweden: :singapore: :st_helena: :slovenia:
:svalbard_jan_mayen: :slovakia: :sierra_leone: :san_marino: :senegal: :somalia:
:suriname: :south_sudan: :sao_tome_principe: :el_salvador: :sint_maarten:
:syria: :swaziland: :tristan_da_cunha: :turks_caicos_islands: :chad:
:french_southern_territories: :togo: :thailand: :tajikistan: :tokelau:
:timor_leste: :turkmenistan: :tunisia: :tonga: :tr: :trinidad_tobago: :tuvalu:
:taiwan: :tanzania: :ukraine: :uganda: :us_outlying_islands: :united_nations:
:us: :uruguay: :uzbekistan: :vatican_city: :st_vincent_grenadines: :venezuela:
:british_virgin_islands: :us_virgin_islands: :vietnam: :vanuatu: :wallis_futuna:
:samoa: :kosovo: :yemen: :mayotte: :south_africa: :zambia: :zimbabwe:

### Subdivision Flag

:england: :scotland: :wales:

## GitHub Custom Emoji

### custom

:atom: :basecamp: :basecampy: :bowtie: :electron: :feelsgood: :finnadie:
:goberserk: :godmode: :hurtrealbad: :neckbeard: :octocat: :rage1: :rage2:
:rage3: :rage4: :shipit: :suspect: :trollface:
