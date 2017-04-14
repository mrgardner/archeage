import {Injectable} from "@angular/core";

declare var firebase: any;

@Injectable()
export class ArcheageDatabaseService {

  private allItems: Object = {};
  private skills: Object = {};
  private titles: Object = {};
  private AllTitles: Object = {};
  private singleItem: Object = {};
  private savedBuild: Object = {};

  removeItems() {
    firebase.database().ref(`Item/`).remove();
  }

  createItem(item:Object,id:any){
    firebase.database().ref(`Item/${id}`).update(item);
  }

  createTitle(item:Object,id:any){
    firebase.database().ref(`Title/${id}`).update(item);
  }

  createSkill(item:Object,id:any){
    firebase.database().ref(`Skill/${id}`).update(item);
  }

  removeSkills(){
    firebase.database().ref(`Skill/`).remove();
  }

  saveBuild(id: number, item:Object) {
    firebase.database().ref(`SavedBuilds/${id}`).update(item);
  }

  getSavedBuild(id: number) {
    let that = this;
    firebase.database().ref(`SavedBuilds/${id}`)
      .once('value', function(snapshot) {
        if(snapshot.val()) {
            that.savedBuild["leftSkills"] = snapshot.val().leftSkills;
            that.savedBuild["middleSkills"] = snapshot.val().middleSkills;
            that.savedBuild["rightSkills"] = snapshot.val().rightSkills;
            that.savedBuild["leftSkillsTitle"] = snapshot.val().leftSkillsTitle;
            that.savedBuild["middleSkillsTitle"] = snapshot.val().middleSkillsTitle;
            that.savedBuild["rightSkillsTitle"] = snapshot.val().rightSkillsTitle;
            that.savedBuild["leftSkillsPoints"] = snapshot.val().leftSkillsPoints;
            that.savedBuild["middleSkillsPoints"] = snapshot.val().middleSkillsPoints;
            that.savedBuild["rightSkillsPoints"] = snapshot.val().rightSkillsPoints;
            that.savedBuild["skillPoints"] = snapshot.val().skillPoints;
            that.savedBuild["className"] = snapshot.val().className;
        }
      });
    return that.savedBuild;
  }

  getAllSkills() {
    let that = this;
    let items = [];
    firebase.database().ref(`Skill/`)
      .on('value', function(snapshot) {
        if(snapshot.val()) {
          let total = Object.keys(snapshot.val()).length;
          for (let i = 0; i < total; i++) {
            let id = Object(Object.keys(snapshot.val())[i]);
            that.skills = {};
            that.skills["id"] = snapshot.val()[id].id;
            that.skills["icon"] = snapshot.val()[id].icon;
            that.skills["name"] = snapshot.val()[id].name;
            that.skills["className"] = snapshot.val()[id].className;
            that.skills["type"] = snapshot.val()[id].type;
            that.skills["skillPointsRequired"] = snapshot.val()[id].skillPointsRequired;
            that.skills["selected"] = snapshot.val()[id].selected;
            items.push(that.skills)
          }
        }
      });
    return items;
  }

  getTitle(id: number) {
    let that = this;
    firebase.database().ref(`Title/${id}`)
      .once('value', function(snapshot) {
        if(snapshot.val()) {
          that.titles["id"] = snapshot.val().id;
          that.titles["icon"] = snapshot.val().icon;
          that.titles["title"] = snapshot.val().title;
          that.titles["description"] = snapshot.val().description;
        }
      });
    return that.titles;
  }

  getAllTitles() {
    let that = this;
    let items = [];
    firebase.database().ref(`Title/`)
      .on('value', function(snapshot) {
        if(snapshot.val()) {
          let total = Object.keys(snapshot.val()).length;
          for (let i = 0; i < total; i++) {
            let id = Object(Object.keys(snapshot.val())[i]);
            that.AllTitles = {};
            that.AllTitles["id"] = snapshot.val()[id].id;
            that.AllTitles["icon"] = snapshot.val()[id].icon;
            that.AllTitles["title"] = snapshot.val()[id].title;
            that.AllTitles["description"] = snapshot.val()[id].description;
            items.push(that.AllTitles)
          }
        }
      });
    return items;
  }

  getItem(id: number) {
    let that = this;
    firebase.database().ref(`Item/${id}`)
      .once('value', function(snapshot) {
        if(snapshot.val()) {
          that.singleItem["itemClass"] = snapshot.val().itemClass;
          that.singleItem["itemType"] = snapshot.val().itemType;
          that.singleItem["id"] = snapshot.val().id;
          that.singleItem["icon"] = snapshot.val().icon;
          that.singleItem["grade"] = snapshot.val().grade;
          that.singleItem["name"] = snapshot.val().name;
          that.singleItem["lootSource"] = snapshot.val().lootSource;
          that.singleItem["lootType"] = snapshot.val().lootType;
          that.singleItem["requiredLevel"] = snapshot.val().requiredLevel;
          that.singleItem["minLevel"] = snapshot.val().minLevel;
          that.singleItem["itemLevel"] = snapshot.val().itemLevel;
          that.singleItem["pickup"] = snapshot.val().pickup;
          that.singleItem["weaponType"] = snapshot.val().weaponType;
          that.singleItem["attackSpeed"] = snapshot.val().attackSpeed;
          that.singleItem["durability"] = snapshot.val().durability;
          that.singleItem["penetrationChance"] = snapshot.val().penetrationChance;
          that.singleItem["amputationChance"] = snapshot.val().amputationChance;
          that.singleItem["chanceText"] = snapshot.val().chanceText;
          that.singleItem["dps"] = snapshot.val().dps;
          that.singleItem["dpsLowerText"] = snapshot.val().dpsLowerText;
          that.singleItem["dpsUpperText"] = snapshot.val().dpsUpperText;
          that.singleItem["attributes"] = snapshot.val().attributes;
          that.singleItem["maxGrade"] = snapshot.val().maxGrade;
          that.singleItem["salvageable"] = snapshot.val().salvageable;
          that.singleItem["temper"] = snapshot.val().temper;
          that.singleItem["lunagemSlots"] = snapshot.val().lunagemSlots;
          that.singleItem["useEffect"] = snapshot.val().useEffect;
          that.singleItem["useEffectText1"] = snapshot.val().useEffectText1;
          that.singleItem["useEffectText2"] = snapshot.val().useEffectText2;
          that.singleItem["useEffectText3"] = snapshot.val().useEffectText3;
          that.singleItem["useEffectText4"] = snapshot.val().useEffectText4;
          that.singleItem["useEffectStat1"] = snapshot.val().useEffectStat1;
          that.singleItem["useEffectStat2"] = snapshot.val().useEffectStat2;
          that.singleItem["useEffectStat3"] = snapshot.val().useEffectStat3;
          that.singleItem["useEffectStat4"] = snapshot.val().useEffectStat4;
          that.singleItem["useEffectStat5"] = snapshot.val().useEffectStat5;
          that.singleItem["comboEffect"] = snapshot.val().comboEffect;
          that.singleItem["comboEffectText1"] = snapshot.val().comboEffectText1;
          that.singleItem["comboEffectText2"] = snapshot.val().comboEffectText2;
          that.singleItem["comboEffectStat1"] = snapshot.val().comboEffectStat1;
          that.singleItem["comboEffectStat2"] = snapshot.val().comboEffectStat2;
          that.singleItem["equipEffect"] = snapshot.val().equipEffect;
          that.singleItem["equipEffectText1"] = snapshot.val().equipEffectText1;
          that.singleItem["equipEffectText2"] = snapshot.val().equipEffectText2;
          that.singleItem["equipEffectText3"] = snapshot.val().equipEffectText3;
          that.singleItem["equipEffectStat1"] = snapshot.val().equipEffectStat1;
          that.singleItem["equipEffectStat2"] = snapshot.val().equipEffectStat2;
          that.singleItem["setEffect"] = snapshot.val().setEffect;
          that.singleItem["setEffectText1"] = snapshot.val().setEffectText1;
          that.singleItem["setEffectText2"] = snapshot.val().setEffectText2;
          that.singleItem["setEffectStat1"] = snapshot.val().setEffectStat1;
          that.singleItem["setEffectStat2"] = snapshot.val().setEffectStat2;
          that.singleItem["setEffectTitle"] = snapshot.val().setEffectTitle;
          that.singleItem["setEffectCountText"] = snapshot.val().setEffectCountText;
          that.singleItem["setItems"] = snapshot.val().setItems;
          that.singleItem["equipmentPoints"] = snapshot.val().equipmentPoints;
          that.singleItem["price"] = snapshot.val().price;
          that.singleItem["shopPrice"] = snapshot.val().shopPrice;
          that.singleItem["salvageMaterial"] = snapshot.val().salvageMaterial;
        }
      });
    return that.singleItem;
  }

  getAllItems() {
    let that = this;
    let items = [];
    firebase.database().ref(`Item/`)
      .on('value', function(snapshot) {
        if(snapshot.val()) {
          let total = Object.keys(snapshot.val()).length;
          for (let i = 0; i < total; i++) {
            let id = Object(Object.keys(snapshot.val())[i]);
            that.allItems = {};
            that.allItems["itemClass"] = snapshot.val()[id].itemClass;
            that.allItems["itemType"] = snapshot.val()[id].itemType;
            that.allItems["id"] = snapshot.val()[id].id;
            that.allItems["icon"] = snapshot.val()[id].icon;
            that.allItems["grade"] = snapshot.val()[id].grade;
            that.allItems["name"] = snapshot.val()[id].name;
            that.allItems["lootSource"] = snapshot.val()[id].lootSource;
            that.allItems["lootType"] = snapshot.val()[id].lootType;
            that.allItems["requiredLevel"] = snapshot.val()[id].requiredLevel;
            that.allItems["minLevel"] = snapshot.val()[id].minLevel;
            that.allItems["itemLevel"] = snapshot.val()[id].itemLevel;
            that.allItems["pickup"] = snapshot.val()[id].pickup;
            that.allItems["weaponType"] = snapshot.val()[id].weaponType;
            that.allItems["attackSpeed"] = snapshot.val()[id].attackSpeed;
            that.allItems["durability"] = snapshot.val()[id].durability;
            that.allItems["penetrationChance"] = snapshot.val()[id].penetrationChance;
            that.allItems["amputationChance"] = snapshot.val()[id].amputationChance;
            that.allItems["chanceText"] = snapshot.val()[id].chanceText;
            that.allItems["dps"] = snapshot.val()[id].dps;
            that.allItems["dpsLowerText"] = snapshot.val()[id].dpsLowerText;
            that.allItems["dpsUpperText"] = snapshot.val()[id].dpsUpperText;
            that.allItems["attributes"] = snapshot.val()[id].attributes;
            that.allItems["maxGrade"] = snapshot.val()[id].maxGrade;
            that.allItems["salvageable"] = snapshot.val()[id].salvageable;
            that.allItems["temper"] = snapshot.val()[id].temper;
            that.allItems["lunagemSlots"] = snapshot.val()[id].lunagemSlots;
            that.allItems["useEffect"] = snapshot.val()[id].useEffect;
            that.allItems["useEffectText1"] = snapshot.val()[id].useEffectText1;
            that.allItems["useEffectText2"] = snapshot.val()[id].useEffectText2;
            that.allItems["useEffectText3"] = snapshot.val()[id].useEffectText3;
            that.allItems["useEffectText4"] = snapshot.val()[id].useEffectText4;
            that.allItems["useEffectStat1"] = snapshot.val()[id].useEffectStat1;
            that.allItems["useEffectStat2"] = snapshot.val()[id].useEffectStat2;
            that.allItems["useEffectStat3"] = snapshot.val()[id].useEffectStat3;
            that.allItems["useEffectStat4"] = snapshot.val()[id].useEffectStat4;
            that.allItems["useEffectStat5"] = snapshot.val()[id].useEffectStat5;
            that.allItems["comboEffect"] = snapshot.val()[id].comboEffect;
            that.allItems["comboEffectText1"] = snapshot.val()[id].comboEffectText1;
            that.allItems["comboEffectText2"] = snapshot.val()[id].comboEffectText2;
            that.allItems["comboEffectStat1"] = snapshot.val()[id].comboEffectStat1;
            that.allItems["comboEffectStat2"] = snapshot.val()[id].comboEffectStat2;
            that.allItems["equipEffect"] = snapshot.val()[id].equipEffect;
            that.allItems["equipEffectText1"] = snapshot.val()[id].equipEffectText1;
            that.allItems["equipEffectText2"] = snapshot.val()[id].equipEffectText2;
            that.allItems["equipEffectText3"] = snapshot.val()[id].equipEffectText3;
            that.allItems["equipEffectStat1"] = snapshot.val()[id].equipEffectStat1;
            that.allItems["equipEffectStat2"] = snapshot.val()[id].equipEffectStat2;
            that.allItems["setEffect"] = snapshot.val()[id].setEffect;
            that.allItems["setEffectText1"] = snapshot.val()[id].setEffectText1;
            that.allItems["setEffectText2"] = snapshot.val()[id].setEffectText2;
            that.allItems["setEffectStat1"] = snapshot.val()[id].setEffectStat1;
            that.allItems["setEffectStat2"] = snapshot.val()[id].setEffectStat2;
            that.allItems["setEffectTitle"] = snapshot.val()[id].setEffectTitle;
            that.allItems["setEffectCountText"] = snapshot.val()[id].setEffectCountText;
            that.allItems["setItems"] = snapshot.val()[id].setItems;
            that.allItems["equipmentPoints"] = snapshot.val()[id].equipmentPoints;
            that.allItems["price"] = snapshot.val()[id].price;
            that.allItems["shopPrice"] = snapshot.val()[id].shopPrice;
            that.allItems["salvageMaterial"] = snapshot.val()[id].salvageMaterial;
            items.push(that.allItems)
          }
        }
      });
    console.log(items);
    return items;
  }


  createAxe(id:any) {
    firebase.database().ref(`Item/Weapon/1H Weapon/Axe/${id}`).set({
      itemType: 'Axe',
      id: id,
      name: 'name',
      lootType: 'type',
      lootSource: 'source',
      level: 55,
      pickup: 'binds on pickup',
      weaponType: '1H Weapon',
      attackSpeed: '1.7',
      durability: '130/130',
      amputationChance: 'High',
      dps: 300,
      attributes: {
        strength: 60
      },
      maxGrade: 'mythic',
      salvageable: 'Max Salvageable',
      temper: 'Tempering available',
      lunagemSlots: 0,
      comboEffect: 'test',
      equipEffect: 'test',
      equipmentPoints: 500,
      Price: 4,
      shopPrice: 20

    });
  }

  createDagger(id:any) {
    firebase.database().ref(`Item/Weapon/1H Weapon/Dagger/${id}`).set({
      itemType: 'Dagger',
      id: id
    });
  }

  createSword(id:any) {
    firebase.database().ref(`Item/Weapon/1H Weapon/Sword/${id}`).set({
      itemType: 'test name',
      id: id
    });
  }

  createKatana(id:any) {
    firebase.database().ref(`Item/Weapon/1H Weapon/Katana/${id}`).set({
      itemType: 'test name',
      id: id
    });
  }

  createClub(id:any) {
    firebase.database().ref(`Item/Weapon/1H Weapon/Club/${id}`).set({
      itemType: 'test name',
      id: id
    });
  }

  createScepter(id:any) {
    firebase.database().ref(`Item/Weapon/1H Weapon/Scepter/${id}`).set({
      itemType: 'test name',
      id: id
    });
  }

  createShortspear(id:any) {
    firebase.database().ref(`Item/Weapon/1H Weapon/Shortspear/${id}`).set({
      itemType: 'test name',
      id: id
    });
  }

  createGreatsword(id:any) {
    firebase.database().ref(`Item/Weapon/2H Weapon/Greatsword/${id}`).set({
      itemType: 'test name',
      id: id
    });
  }

  createNodachi(id:any) {
    firebase.database().ref(`Item/Weapon/2H Weapon/Nodachi/${id}`).set({
      itemType: 'test name',
      id: id
    });
  }

  createGreataxe(id:any) {
    firebase.database().ref(`Item/Weapon/2H Weapon/Greataxe/${id}`).set({
      itemType: 'test name',
      id: id
    });
  }

  createGreatclub(id:any) {
    firebase.database().ref(`Item/Weapon/2H Weapon/Greatclub/${id}`).set({
      itemType: 'test name',
      id: id
    });
  }

  createStaff(id:any) {
    firebase.database().ref(`Item/Weapon/2H Weapon/Staff/${id}`).set({
      itemType: 'test name',
      id: id
    });
  }

  createLongspear(id:any) {
    firebase.database().ref(`Item/Weapon/2H Weapon/Longspear/${id}`).set({
      itemType: 'test name',
      id: id
    });
  }

  createLute(id:any) {
    firebase.database().ref(`Item/Weapon/Instruments/Lute/${id}`).set({
      itemType: 'test name',
      id: id
    });
  }

  createFlute(id:any) {
    firebase.database().ref(`Item/Weapon/Instruments/Flute/${id}`).set({
      itemType: 'test name',
      id: id
    });
  }

  createDrum(id:any) {
    firebase.database().ref(`Item/Weapon/Instruments/Drum/${id}`).set({
      itemType: 'test name',
      id: id
    });
  }

  createBow(id:any) {
    firebase.database().ref(`Item/Weapon/Bow/${id}`).set({
      itemType: 'test name',
      id: id
    });
  }

}
