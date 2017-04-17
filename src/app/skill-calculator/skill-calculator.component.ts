import { Component} from '@angular/core';
import {ArcheageDatabaseService} from "../services/database.service";
import {ActivatedRoute, Router} from "@angular/router";
import {isUndefined} from "util";

@Component({
  selector: 'app-calculator',
  templateUrl: './skill-calculator.component.html',
  styleUrls: ['./skill-calculator.component.css']
})
export class SkillCalculatorComponent {

  private level: number;
  private skills: Array<any>;
  private skillPointCount: number;
  private battlerageSkills: Array<Object>;
  private defenseSkills: Array<Object>;
  private occultismSkills: Array<Object>;
  private sorcerySkills: Array<Object>;
  private songcraftSkills: Array<Object>;
  private witchcraftSkills: Array<Object>;
  private auramancySkills: Array<Object>;
  private archerySkills: Array<Object>;
  private shadowplaySkills: Array<Object>;
  private vitalismSkills: Array<Object>;
  private showLeftSkills: boolean = false;
  private showMiddleSkills: boolean = false;
  private showRightSkills: boolean = false;
  private showPossibleClass: boolean = false;
  private leftSkillsName: string;
  private middleSkillsName: string;
  private rightSkillsName: string;
  private leftSkillsTitle: string;
  private middleSkillsTitle: string;
  private rightSkillsTitle: string;
  private leftSkillPoints: number = 0;
  private middleSkillPoints: number = 0;
  private rightSkillPoints: number = 0;
  private buildId: number;
  private leftSkillsResetArray: Array<Object>;
  private middleSkillsResetArray: Array<Object>;
  private rightSkillsResetArray: Array<Object>;
  private allSkills: Array<Object>;
  private customSkills: Array<Object>;
  private classNameFromSkills: Array<Object>;
  private classNames: Array<Object>;
  private sortColumns: any;
  private showSavedBuildLink: boolean = false;
  private savedBuildLink: string;
  private savedBuild: any;
  private leftSkills: any;
  private middleSkills: any;
  private rightSkills: any;

  constructor(private _database: ArcheageDatabaseService, private route: ActivatedRoute, private router: Router) {
    let that = this;
    that.allSkills = this._database.getAllSkills();
    that.route.params.subscribe(matrixParams => {
      if (matrixParams.hasOwnProperty('buildId')) {
        that.buildId = matrixParams["buildId"];
        that.savedBuild = that._database.getSavedBuild(that.buildId);
        if (Object.keys(that.savedBuild).length !== 0) {
          setTimeout(function () {
            that.leftSkillPoints = that.savedBuild['leftSkillsPoints'];
            that.middleSkillPoints = that.savedBuild['middleSkillsPoints'];
            that.rightSkillPoints = that.savedBuild['rightSkillsPoints'];
            that.leftSkillsTitle = that.savedBuild['leftSkillsTitle'];
            that.middleSkillsTitle = that.savedBuild['middleSkillsTitle'];
            that.rightSkillsTitle = that.savedBuild['rightSkillsTitle'];
            that.leftSkillsName = that.savedBuild['leftSkillsTitle'];
            that.middleSkillsName = that.savedBuild['middleSkillsTitle'];
            that.rightSkillsName = that.savedBuild['rightSkillsTitle'];
            that.skillPointCount = that.savedBuild['skillPoints'];
            that.showLeftSkillSet(that.savedBuild['leftSkillsTitle']);
            that.showMiddleSkillSet(that.savedBuild['middleSkillsTitle']);
            that.showRightSkillSet(that.savedBuild['rightSkillsTitle']);
            that.leftSkills = that.savedBuild['leftSkills'];
            that.middleSkills = that.savedBuild['middleSkills'];
            that.rightSkills = that.savedBuild['rightSkills'];
            for (let i = 0; i < that.allSkills.length; i++) {
              if (that.allSkills[i]['className'] === that.savedBuild['leftSkillsTitle'].toLowerCase()) {
                for (let j = 0; j < that.leftSkills.length; j++) {
                  if (that.allSkills[i]['name'] === that.leftSkills[j]['name']) {
                    that.allSkills[i]['selected'] = that.leftSkills[j]['selected'];
                  }
                }
              }
              if (that.allSkills[i]['className'] === that.savedBuild['middleSkillsTitle'].toLowerCase()) {
                for (let j = 0; j < that.middleSkills.length; j++) {
                  if (that.allSkills[i]['name'] === that.middleSkills[j]['name']) {
                    that.allSkills[i]['selected'] = that.middleSkills[j]['selected'];
                  }
                }
              }
              if (that.allSkills[i]['className'] === that.savedBuild['rightSkillsTitle'].toLowerCase()) {
                for (let j = 0; j < that.rightSkills.length; j++) {
                  if (that.allSkills[i]['name'] === that.rightSkills[j]['name']) {
                    that.allSkills[i]['selected'] = that.rightSkills[j]['selected'];
                  }
                }
              }
            }
          },3000);
        }
        else {
          that.router.navigate(['calculator']);
        }
      }

    });
    that.sortColumns = {
      active: false,
      descending: false
    };
    that.level = 55;
    that.skillPointCount = 28;
    that.classNameFromSkills = [];
    that.leftSkillsResetArray = [];
    that.middleSkillsResetArray = [];
    that.rightSkillsResetArray = [];
    that.skills = [
      {
        name: 'Battlerage',
        selected: false
      },
      {
        name: 'Defense',
        selected: false
      },
      {
        name: 'Occultism',
        selected: false
      },
      {
        name: 'Sorcery',
        selected: false
      },
      {
        name: 'Songcraft',
        selected: false
      },
      {
        name: 'Witchcraft',
        selected: false
      },
      {
        name: 'Auramancy',
        selected: false
      },
      {
        name: 'Archery',
        selected: false
      },
      {
        name: 'Shadowplay',
        selected: false
      },
      {
        name: 'Vitalism',
        selected: false
      }
    ];
    that.customSkills = this.skills.slice();
    that.leftSkillsTitle = '';
    that.middleSkillsTitle = '';
    that.rightSkillsTitle = '';

    that.classNames = [
      {
        className: 'Abolisher',
        skillSet1: 'Battlerage',
        skillSet2: 'Defense',
        skillSet3: 'Auramancy'
      },
      {
        className: 'Crusader',
        skillSet1: 'Battlerage',
        skillSet2: 'Defense',
        skillSet3: 'Sorcery'
      },
      {
        className: 'Enchantrix',
        skillSet1: 'Songcraft',
        skillSet2: 'Witchcraft',
        skillSet3: 'Auramancy'
      },
      {
        className: 'Liberator',
        skillSet1: 'Battlerage',
        skillSet2: 'Defense',
        skillSet3: 'Archery'
      },
      {
        className: 'Shadowbane',
        skillSet1: 'Defense',
        skillSet2: 'Witchcraft',
        skillSet3: 'Vitalism'
      },
      {
        className: 'Animist',
        skillSet1: 'Sorcery',
        skillSet2: 'Shadowplay',
        skillSet3: 'Vitalism'
      },
      {
        className: 'Cultist',
        skillSet1: 'Occultism',
        skillSet2: 'Sorcery',
        skillSet3: 'Vitalism'
      },
      {
        className: 'Enforcer',
        skillSet1: 'Battlerage',
        skillSet2: 'Sorcery',
        skillSet3: 'Auramancy'
      },
      {
        className: 'Lorebreaker',
        skillSet1: 'Battlerage',
        skillSet2: 'Occultism',
        skillSet3: 'Songcraft'
      },
      {
        className: 'Shadowblade',
        skillSet1: 'Battlerage',
        skillSet2: 'Witchcraft',
        skillSet3: 'Shadowplay'
      },
      {
        className: 'Arcane Hunter',
        skillSet1: 'Witchcraft',
        skillSet2: 'Auramancy',
        skillSet3: 'Archery'
      },
      {
        className: 'Daggerspell',
        skillSet1: 'Sorcery',
        skillSet2: 'Witchcraft',
        skillSet3: 'Shadowplay'
      },
      {
        className: 'Enigmatist',
        skillSet1: 'Sorcery',
        skillSet2: 'Auramancy',
        skillSet3: 'Shadowplay'
      },
      {
        className: 'Naturalist',
        skillSet1: 'Sorcery',
        skillSet2: 'Archery',
        skillSet3: 'Vitalism'
      },
      {
        className: 'Shadowknight',
        skillSet1: 'Defense',
        skillSet2: 'Witchcraft',
        skillSet3: 'Shadowplay'
      },
      {
        className: 'Arcanist',
        skillSet1: 'Sorcery',
        skillSet2: 'Witchcraft',
        skillSet3: 'Auramancy'
      },
      {
        className: 'Dark Aegis',
        skillSet1: 'Defense',
        skillSet2: 'Occultism',
        skillSet3: 'Songcraft'
      },
      {
        className: 'Evoker',
        skillSet1: 'Sorcery',
        skillSet2: 'Songcraft',
        skillSet3: 'Archery'
      },
      {
        className: 'Necromancer',
        skillSet1: 'Occultism',
        skillSet2: 'Witchcraft',
        skillSet3: 'Vitalism'
      },
      {
        className: 'Shaman',
        skillSet1: 'Sorcery',
        skillSet2: 'Witchcraft',
        skillSet3: 'Vitalism'
      },
      {
        className: 'Archon',
        skillSet1: 'Defense',
        skillSet2: 'Witchcraft',
        skillSet3: 'Archery'
      },
      {
        className: 'Darkrunner',
        skillSet1: 'Battlerage',
        skillSet2: 'Auramancy',
        skillSet3: 'Shadowplay'
      },
      {
        className: 'Executioner',
        skillSet1: 'Battlerage',
        skillSet2: 'Occultism',
        skillSet3: 'Shadowplay'
      },
      {
        className: 'Nightbearer',
        skillSet1: 'Defense',
        skillSet2: 'Songcraft',
        skillSet3: 'Shadowplay'
      },
      {
        className: 'Shroudmaster',
        skillSet1: 'Occultism',
        skillSet2: 'Witchcraft',
        skillSet3: 'Shadowplay'
      },
      {
        className: 'Argent',
        skillSet1: 'Battlerage',
        skillSet2: 'Auramancy',
        skillSet3: 'Vitalism'
      },
      {
        className: 'Dawncaller',
        skillSet1: 'Battlerage',
        skillSet2: 'Defense',
        skillSet3: 'Songcraft'
      },
      {
        className: 'Exorcist',
        skillSet1: 'Songcraft',
        skillSet2: 'Auramancy',
        skillSet3: 'Shadowplay'
      },
      {
        className: 'Nightblade',
        skillSet1: 'Defense',
        skillSet2: 'Auramancy',
        skillSet3: 'Shadowplay'
      },
      {
        className: 'Skullknight',
        skillSet1: 'Defense',
        skillSet2: 'Occultism',
        skillSet3: 'Auramancy'
      },
      {
        className: 'Assassin',
        skillSet1: 'Witchcraft',
        skillSet2: 'Shadowplay',
        skillSet3: 'Vitalism'
      },
      {
        className: 'Death Warden',
        skillSet1: 'Defense',
        skillSet2: 'Shadowplay',
        skillSet3: 'Vitalism'
      },
      {
        className: 'Farslayer',
        skillSet1: 'Defense',
        skillSet2: 'Sorcery',
        skillSet3: 'Archery'
      },
      {
        className: 'Nightcloak',
        skillSet1: 'Occultism',
        skillSet2: 'Witchcraft',
        skillSet3: 'Auramancy'
      },
      {
        className: 'Soothsayer',
        skillSet1: 'Auramancy',
        skillSet2: 'Shadowplay',
        skillSet3: 'Vitalism'
      },
      {
        className: 'Astral Ranger',
        skillSet1: 'Occultism',
        skillSet2: 'Auramancy',
        skillSet3: 'Archery'
      },
      {
        className: 'Defiler',
        skillSet1: 'Defense',
        skillSet2: 'Occultism',
        skillSet3: 'Witchcraft'
      },
      {
        className: 'Fleshshaper',
        skillSet1: 'Battlerage',
        skillSet2: 'Sorcery',
        skillSet3: 'Vitalism'
      },
      {
        className: 'Nightwitch',
        skillSet1: 'Songcraft',
        skillSet2: 'Witchcraft',
        skillSet3: 'Shadowplay'
      },
      {
        className: 'Sorrowsong',
        skillSet1: 'Occultism',
        skillSet2: 'Songcraft',
        skillSet3: 'Vitalism'
      },
      {
        className: 'Athame',
        skillSet1: 'Songcraft',
        skillSet2: 'Witchcraft',
        skillSet3: 'Vitalism'
      },
      {
        className: 'Demonologist',
        skillSet1: 'Occultism',
        skillSet2: 'Sorcery',
        skillSet3: 'Witchcraft'
      },
      {
        className: 'Gravesinger',
        skillSet1: 'Occultism',
        skillSet2: 'Songcraft',
        skillSet3: 'Archery'
      },
      {
        className: 'Nocturne',
        skillSet1: 'Occultism',
        skillSet2: 'Songcraft',
        skillSet3: 'Shadowplay'
      },
      {
        className: 'Soulbow',
        skillSet1: 'Witchcraft',
        skillSet2: 'Archery',
        skillSet3: 'Vitalism'
      },
      {
        className: 'Bastion',
        skillSet1: 'Defense',
        skillSet2: 'Auramancy',
        skillSet3: 'Archery'
      },
      {
        className: 'Dervish',
        skillSet1: 'Battlerage',
        skillSet2: 'Witchcraft',
        skillSet3: 'Vitalism'
      },
      {
        className: 'Gypsy',
        skillSet1: 'Sorcery',
        skillSet2: 'Songcraft',
        skillSet3: 'Vitalism'
      },
      {
        className: 'Oracle',
        skillSet1: 'Auramancy',
        skillSet2: 'Archery',
        skillSet3: 'Vitalism'
      },
      {
        className: 'Soulsong',
        skillSet1: 'Songcraft',
        skillSet2: 'Archery',
        skillSet3: 'Vitalism'
      },
      {
        className: 'Battlemage',
        skillSet1: 'Defense',
        skillSet2: 'Occultism',
        skillSet3: 'Sorcery'
      },
      {
        className: 'Destroyer',
        skillSet1: 'Battlerage',
        skillSet2: 'Sorcery',
        skillSet3: 'Archery'
      },
      {
        className: 'Harbinger',
        skillSet1: 'Battlerage',
        skillSet2: 'Sorcery',
        skillSet3: 'Witchcraft'
      },
      {
        className: 'Outrider',
        skillSet1: 'Battlerage',
        skillSet2: 'Archery',
        skillSet3: 'Shadowplay'
      },
      {
        className: 'Spellbow',
        skillSet1: 'Occultism',
        skillSet2: 'Sorcery',
        skillSet3: 'Archery'
      },
      {
        className: 'Blackguard',
        skillSet1: 'Battlerage',
        skillSet2: 'Occultism',
        skillSet3: 'Vitalism'
      },
      {
        className: 'Dirgeweaver',
        skillSet1: 'Battlerage',
        skillSet2: 'Songcraft',
        skillSet3: 'Witchcraft'
      },
      {
        className: 'Hellweaver',
        skillSet1: 'Battlerage',
        skillSet2: 'Sorcery',
        skillSet3: 'Shadowplay'
      },
      {
        className: 'Paladin',
        skillSet1: 'Battlerage',
        skillSet2: 'Defense',
        skillSet3: 'Vitalism'
      },
      {
        className: 'Spellsinger',
        skillSet1: 'Sorcery',
        skillSet2: 'Songcraft',
        skillSet3: 'Shadowplay'
      },
      {
        className: 'Blade Dancer',
        skillSet1: 'Battlerage',
        skillSet2: 'Songcraft',
        skillSet3: 'Shadowplay'
      },
      {
        className: 'Doombringer',
        skillSet1: 'Occultism',
        skillSet2: 'Shadowplay',
        skillSet3: 'Vitalism'
      },
      {
        className: 'Herald',
        skillSet1: 'Battlerage',
        skillSet2: 'Songcraft',
        skillSet3: 'Auramancy'
      },
      {
        className: 'Phantasm',
        skillSet1: 'Occultism',
        skillSet2: 'Songcraft',
        skillSet3: 'Auramancy'
      },
      {
        className: 'Spellsong',
        skillSet1: 'Sorcery',
        skillSet2: 'Songcraft',
        skillSet3: 'Auramancy'
      },
      {
        className: 'Blighter',
        skillSet1: 'Battlerage',
        skillSet2: 'Defense',
        skillSet3: 'Shadowplay'
      },
      {
        className: 'Doomlord',
        skillSet1: 'Battlerage',
        skillSet2: 'Defense',
        skillSet3: 'Occultism'
      },
      {
        className: 'Hex Ranger',
        skillSet1: 'Songcraft',
        skillSet2: 'Witchcraft',
        skillSet3: 'Archery'
      },
      {
        className: 'Planeshifter',
        skillSet1: 'Occultism',
        skillSet2: 'Auramancy',
        skillSet3: 'Shadowplay'
      },
      {
        className: 'Spellsword',
        skillSet1: 'Battlerage',
        skillSet2: 'Sorcery',
        skillSet3: 'Songcraft'
      },
      {
        className: 'Blood Arrow',
        skillSet1: 'Occultism',
        skillSet2: 'Archery',
        skillSet3: 'Vitalism'
      },
      {
        className: 'Dreadbow',
        skillSet1: 'Battlerage',
        skillSet2: 'Occultism',
        skillSet3: 'Archery'
      },
      {
        className: 'Hex Warden',
        skillSet1: 'Battlerage',
        skillSet2: 'Witchcraft',
        skillSet3: 'Auramancy'
      },
      {
        className: 'Poxbane',
        skillSet1: 'Defense',
        skillSet2: 'Songcraft',
        skillSet3: 'Witchcraft'
      },
      {
        className: 'Stone Arrow',
        skillSet1: 'Defense',
        skillSet2: 'Archery',
        skillSet3: 'Shadowplay'
      },
      {
        className: 'Bloodreaver',
        skillSet1: 'Battlerage',
        skillSet2: 'Occultism',
        skillSet3: 'Auramancy'
      },
      {
        className: 'Dreadhunter',
        skillSet1: 'Battlerage',
        skillSet2: 'Witchcraft',
        skillSet3: 'Archery'
      },
      {
        className: 'Hexblade',
        skillSet1: 'Battlerage',
        skillSet2: 'Defense',
        skillSet3: 'Witchcraft'
      },
      {
        className: 'Primeval',
        skillSet1: 'Auramancy',
        skillSet2: 'Archery',
        skillSet3: 'Shadowplay'
      },
      {
        className: 'Stormcaster',
        skillSet1: 'Sorcery',
        skillSet2: 'Witchcraft',
        skillSet3: 'Archery'
      },
      {
        className: 'Bloodskald',
        skillSet1: 'Battlerage',
        skillSet2: 'Songcraft',
        skillSet3: 'Archery'
      },
      {
        className: 'Dreadnaught',
        skillSet1: 'Defense',
        skillSet2: 'Occultism',
        skillSet3: 'Shadowplay'
      },
      {
        className: 'Hierophant',
        skillSet1: 'Witchcraft',
        skillSet2: 'Auramancy',
        skillSet3: 'Vitalism'
      },
      {
        className: 'Ranger',
        skillSet1: 'Archery',
        skillSet2: 'Shadowplay',
        skillSet3: 'Vitalism'
      },
      {
        className: 'Stormchaser',
        skillSet1: 'Sorcery',
        skillSet2: 'Auramancy',
        skillSet3: 'Archery'
      },
      {
        className: 'Bloodthrall',
        skillSet1: 'Battlerage',
        skillSet2: 'Songcraft',
        skillSet3: 'Vitalism'
      },
      {
        className: 'Dreadstone',
        skillSet1: 'Defense',
        skillSet2: 'Occultism',
        skillSet3: 'Archery'
      },
      {
        className: 'Honorguard',
        skillSet1: 'Defense',
        skillSet2: 'Songcraft',
        skillSet3: 'Archery'
      },
      {
        className: 'Ravager',
        skillSet1: 'Battlerage',
        skillSet2: 'Occultism',
        skillSet3: 'Sorcery'
      },
      {
        className: 'Swiftstone',
        skillSet1: 'Defense',
        skillSet2: 'Sorcery',
        skillSet3: 'Shadowplay'
      },
      {
        className: 'Bonestalker',
        skillSet1: 'Battlerage',
        skillSet2: 'Auramancy',
        skillSet3: 'Archery'
      },
      {
        className: 'Dreambreaker',
        skillSet1: 'Defense',
        skillSet2: 'Witchcraft',
        skillSet3: 'Auramancy',
      },
      {
        className: 'Hordebreaker',
        skillSet1: 'Battlerage',
        skillSet2: 'Occultism',
        skillSet3: 'Witchcraft'
      },
      {
        className: 'Reaper',
        skillSet1: 'Occultism',
        skillSet2: 'Sorcery',
        skillSet3: 'Shadowplay'
      },
      {
        className: 'Templar',
        skillSet1: 'Defense',
        skillSet2: 'Auramancy',
        skillSet3: 'Vitalism'
      },
      {
        className: 'Boneweaver',
        skillSet1: 'Sorcery',
        skillSet2: 'Auramancy',
        skillSet3: 'Vitalism'
      },
      {
        className: 'Druid',
        skillSet1: 'Defense',
        skillSet2: 'Archery',
        skillSet3: 'Vitalism'
      },
      {
        className: 'Howler',
        skillSet1: 'Songcraft',
        skillSet2: 'Auramancy',
        skillSet3: 'Archery'
      },
      {
        className: 'Requiem',
        skillSet1: 'Occultism',
        skillSet2: 'Sorcery',
        skillSet3: 'Songcraft'
      },
      {
        className: 'Thaumaturge',
        skillSet1: 'Defense',
        skillSet2: 'Sorcery',
        skillSet3: 'Auramancy'
      },
      {
        className: 'Cabalist',
        skillSet1: 'Defense',
        skillSet2: 'Sorcery',
        skillSet3: 'Witchcraft'
      },
      {
        className: 'Earthsinger',
        skillSet1: 'Defense',
        skillSet2: 'Sorcery',
        skillSet3: 'Songcraft'
      },
      {
        className: 'Infiltrator',
        skillSet1: 'Sorcery',
        skillSet2: 'Archery',
        skillSet3: 'Shadowplay'
      },
      {
        className: 'Revenant',
        skillSet1: 'Occultism',
        skillSet2: 'Sorcery',
        skillSet3: 'Auramancy'
      },
      {
        className: 'Tomb Warden',
        skillSet1: 'Defense',
        skillSet2: 'Songcraft',
        skillSet3: 'Auramancy'
      },
      {
        className: 'Caretaker',
        skillSet1: 'Defense',
        skillSet2: 'Songcraft',
        skillSet3: 'Vitalism'
      },
      {
        className: 'Ebonsong',
        skillSet1: 'Songcraft',
        skillSet2: 'Archery',
        skillSet3: 'Shadowplay'
      },
      {
        className: 'Inquisitor',
        skillSet1: 'Battlerage',
        skillSet2: 'Shadowplay',
        skillSet3: 'Vitalism'
      },
      {
        className: 'Scion',
        skillSet1: 'Defense',
        skillSet2: 'Sorcery',
        skillSet3: 'Vitalism'
      },
      {
        className: 'Tombcaller',
        skillSet1: 'Occultism',
        skillSet2: 'Songcraft',
        skillSet3: 'Witchcraft'
      },
      {
        className: 'Cleric',
        skillSet1: 'Songcraft',
        skillSet2: 'Auramancy',
        skillSet3: 'Vitalism'
      },
      {
        className: 'Edgewalker',
        skillSet1: 'Occultism',
        skillSet2: 'Auramancy',
        skillSet3: 'Vitalism'
      },
      {
        className: 'Justicar',
        skillSet1: 'Defense',
        skillSet2: 'Occultism',
        skillSet3: 'Vitalism'
      },
      {
        className: 'Shadehunter',
        skillSet1: 'Occultism',
        skillSet2: 'Archery',
        skillSet3: 'Shadowplay'
      },
      {
        className: 'Trickster',
        skillSet1: 'Witchcraft',
        skillSet2: 'Archery',
        skillSet3: 'Shadowplay'
      },
      {
        className: 'Confessor',
        skillSet1: 'Songcraft',
        skillSet2: 'Shadowplay',
        skillSet3: 'Vitalism'
      },
      {
        className: 'Eidolon',
        skillSet1: 'Witchcraft',
        skillSet2: 'Auramancy',
        skillSet3: 'Shadowplay'
      },
      {
        className: 'Lamentor',
        skillSet1: 'Sorcery',
        skillSet2: 'Songcraft',
        skillSet3: 'Witchcraft'
      },
      {
        className: 'Shadestriker',
        skillSet1: 'Occultism',
        skillSet2: 'Witchcraft',
        skillSet3: 'Archery'
      },
      {
        className: 'Warpriest',
        skillSet1: 'Battlerage',
        skillSet2: 'Archery',
        skillSet3: 'Vitalism'
      }
    ];

    that.battlerageSkills = [
      {
        id: 1,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/skills%2Fbattlerage%2Ficon_skill_battlerage_triple_slash.jpg?alt=media&token=76b7df8c-6f1e-4d4d-a1e3-f1c14ee48ef8',
        name: 'Triple Slash',
        className: 'battlerage',
        type: 'combat',
        skillPointsRequired: 0,
        selected: false
      },
      {
        id: 2,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/skills%2Fbattlerage%2Ficon_skill_battlerage_charge.jpg?alt=media&token=b251e7c1-2488-47c3-ad8f-ac606b9b41f0',
        name: 'Charge',
        className: 'battlerage',
        type: 'combat',
        skillPointsRequired: 0,
        selected: false
      },
      {
        id: 3,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/skills%2Fbattlerage%2Ficon_skill_battlerage_whirlwind_slash.jpg?alt=media&token=05a88d8e-d904-4abd-ba6b-3926eda7e83d',
        name: 'Whirlwind Slash',
        className: 'battlerage',
        type: 'combat',
        skillPointsRequired: 0,
        selected: false
      },
      {
        id: 4,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/skills%2Fbattlerage%2Ficon_skill_battlerage_sunder_earth.jpg?alt=media&token=56057374-58a8-4544-af19-2f1489070840',
        name: 'Sunder Earth',
        className: 'battlerage',
        type: 'combat',
        skillPointsRequired: 0,
        selected: false
      },
      {
        id: 5,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/skills%2Fbattlerage%2Ficon_skill_battlerage_lasso.jpg?alt=media&token=27d8c73e-1b94-4f4f-940b-358d7bf8c517',
        name: 'Lasso',
        className: 'battlerage',
        type: 'combat',
        skillPointsRequired: 0,
        selected: false
      },
      {
        id: 6,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/skills%2Fbattlerage%2Ficon_skill_battlerage_terrifying_roar.jpg?alt=media&token=6e483211-7a5a-488c-a762-d1e22cd81f81',
        name: 'Terrifying Roar',
        className: 'battlerage',
        type: 'combat',
        skillPointsRequired: 0,
        selected: false
      },
      {
        id: 7,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/skills%2Fbattlerage%2Ficon_skill_battlerage_bondbreaker.jpg?alt=media&token=748eab74-049b-4d5c-b59f-cebcee7674aa',
        name: 'Bondbreaker',
        className: 'battlerage',
        type: 'combat',
        skillPointsRequired: 0,
        selected: false
      },
      {
        id: 8,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/skills%2Fbattlerage%2Ficon_skill_battlerage_precision_strike.jpg?alt=media&token=ef53662b-5ed6-467b-b33f-5c0836cbd97c',
        name: 'Precision Strike',
        className: 'battlerage',
        type: 'combat',
        skillPointsRequired: 0,
        selected: false
      },
      {
        id: 9,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/skills%2Fbattlerage%2Ficon_skill_battlerage_frenzy.jpg?alt=media&token=41636e16-9a2d-4387-b314-d77d8a3968f7',
        name: 'Frenzy',
        className: 'battlerage',
        type: 'combat',
        skillPointsRequired: 0,
        selected: false
      },
      {
        id: 10,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/skills%2Fbattlerage%2Ficon_skill_battlerage_battle_focus.jpg?alt=media&token=7988886d-da2b-48bf-a94b-ee6f0205d2cd',
        name: 'Battle Focus',
        className: 'battlerage',
        type: 'combat',
        skillPointsRequired: 0,
        selected: false
      },
      {
        id: 11,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/skills%2Fbattlerage%2Ficon_skill_battlerage_tiger_strike.jpg?alt=media&token=955e999c-baa7-4c27-90f9-2dd20a72994c',
        name: 'Tiger Strike',
        className: 'battlerage',
        type: 'combat',
        skillPointsRequired: 0,
        selected: false
      },
      {
        id: 12,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/skills%2Fbattlerage%2Ficon_skill_battlerage_behind_enemy_lines.jpg?alt=media&token=6315088e-97d0-43df-abee-692a9f2a41a6',
        name: 'Behind Enemy Lines',
        className: 'battlerage',
        type: 'combat',
        skillPointsRequired: 0,
        selected: false
      },
      {
        id: 13,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/skills%2Fbattlerage%2Ficon_skill_battlerage_weapon_maneuvers.jpg?alt=media&token=656d31fd-4975-4b53-b6b1-2f0106bb9a80',
        name: 'Weapon Maneuvers',
        className: 'battlerage',
        type: 'passive',
        skillPointsRequired: 2,
        selected: false
      },
      {
        id: 14,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/skills%2Fbattlerage%2Ficon_skill_battlerage_duel_wield_proficiency.jpg?alt=media&token=11ad2f38-acc2-4804-bb1b-580d2830cdf1',
        name: 'Dual-Wield Proficiency',
        type: 'passive',
        className: 'battlerage',
        skillPointsRequired: 4,
        selected: false
      },
      {
        id: 15,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/skills%2Fbattlerage%2Ficon_skill_battlerage_attack_speed_training.jpg?alt=media&token=396704f8-dde6-4347-a70f-2bd7666fd1a2',
        name: 'Attack Speed Training',
        type: 'passive',
        className: 'battlerage',
        skillPointsRequired: 6,
        selected: false
      },
      {
        id: 16,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/skills%2Fbattlerage%2Ficon_skill_battlerage_deflect_and_retaliate.jpg?alt=media&token=fe39fe3b-cc37-43e3-b2fc-dec6366d1038',
        name: 'Deflect and Retaliate',
        type: 'passive',
        className: 'battlerage',
        skillPointsRequired: 7,
        selected: false
      },
      {
        id: 17,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/skills%2Fbattlerage%2Ficon_skill_battlerage_reckless_charge.jpg?alt=media&token=d97ff9dd-2f7e-4bea-a8a2-fabeb0ab1651',
        name: 'Reckless Charge',
        type: 'passive',
        className: 'battlerage',
        skillPointsRequired: 8,
        selected: false
      },
      {
        id: 18,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/skills%2Fbattlerage%2Ficon_skill_battlerage_puncture.jpg?alt=media&token=f539def5-3356-4982-ad80-ce3aff7189f4',
        name: 'Puncture',
        type: 'passive',
        className: 'battlerage',
        skillPointsRequired: 9,
        selected: false
      },
      {
        id: 19,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/skills%2Fbattlerage%2Ficon_skill_battlerage_weapon_mastery.jpg?alt=media&token=d955b75b-b3d1-4374-afdc-2e7b26511e1f',
        name: 'Weapon Mastery',
        type: 'passive',
        className: 'battlerage',
        skillPointsRequired: 10,
        selected: false
      }
    ];

    that.defenseSkills = [
      {
        id: 20,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/skills%2Fdefense%2Ficon_skill_defense_shield_slam.jpg?alt=media&token=9e3a1de4-e580-4691-9f91-b9537c94bf2b',
        name: 'Shield Slam',
        className: 'defense',
        type: 'combat',
        skillPointsRequired: 0,
        selected: false
      },
      {
        id: 21,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/skills%2Fdefense%2Ficon_skill_defense_refreshment.jpg?alt=media&token=82803239-6a29-4eb2-b6b1-2038f258fe13',
        name: 'Refreshment',
        className: 'defense',
        type: 'combat',
        skillPointsRequired: 0,
        selected: false
      },
      {
        id: 22,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/skills%2Fdefense%2Ficon_skill_defense_bull_rush.jpg?alt=media&token=acb5ef7a-cc1c-4ed4-b472-c69dbc782ff4',
        name: 'Bull Rush',
        className: 'defense',
        type: 'combat',
        skillPointsRequired: 0,
        selected: false
      },
      {
        id: 23,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/skills%2Fdefense%2Ficon_skill_defense_boastful_roar.jpg?alt=media&token=b3030cd3-8705-4246-8ad1-d1b79ffaa136',
        name: 'Boastful Roar',
        className: 'defense',
        type: 'combat',
        skillPointsRequired: 0,
        selected: false
      },
      {
        id: 24,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/skills%2Fdefense%2Ficon_skill_defense_toughen.jpg?alt=media&token=553ebf49-4e2b-4564-91b1-fec7ae35b979',
        name: 'Toughen',
        className: 'defense',
        type: 'combat',
        skillPointsRequired: 0,
        selected: false
      },
      {
        id: 25,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/skills%2Fdefense%2Ficon_skill_defense_revitalizing_cheer.jpg?alt=media&token=ace4761d-77ec-4730-b814-a38fc349809d',
        name: 'Revitalizing Cheer',
        className: 'defense',
        type: 'combat',
        skillPointsRequired: 0,
        selected: false
      },
      {
        id: 26,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/skills%2Fdefense%2Ficon_skill_defense_redoubt.jpg?alt=media&token=98eb5588-fcaa-4c2a-9a4e-b06aba4bea95',
        name: 'Redoubt',
        className: 'defense',
        type: 'combat',
        skillPointsRequired: 0,
        selected: false
      },
      {
        id: 27,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/skills%2Fdefense%2Ficon_skill_defense_ollos_hammer.jpg?alt=media&token=49584558-aab0-46a2-b620-2b6f53e17aa6',
        name: "Ollo's Hammer",
        className: 'defense',
        type: 'combat',
        skillPointsRequired: 0,
        selected: false
      },
      {
        id: 28,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/skills%2Fdefense%2Ficon_skill_defense_mocking_howl.jpg?alt=media&token=4329647e-42b4-49b9-91a3-6012040225bb',
        name: 'Mocking Howl',
        className: 'defense',
        type: 'combat',
        skillPointsRequired: 0,
        selected: false
      },
      {
        id: 29,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/skills%2Fdefense%2Ficon_skill_defense_imprison.jpg?alt=media&token=69738278-3ec9-49f0-a6bf-5e5654eaa03f',
        name: 'Imprison',
        className: 'defense',
        type: 'combat',
        skillPointsRequired: 0,
        selected: false
      },
      {
        id: 30,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/skills%2Fdefense%2Ficon_skill_defense_invincibility.jpg?alt=media&token=6b251bcf-e81f-4603-b8db-f27621c3a1d5',
        name: 'Invincibility',
        className: 'defense',
        type: 'combat',
        skillPointsRequired: 0,
        selected: false
      },
      {
        id: 31,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/skills%2Fdefense%2Ficon_skill_defense_fortress.jpg?alt=media&token=24fe22d6-6e1a-490e-b943-f5a0314926bb',
        name: 'Fortress',
        className: 'defense',
        type: 'combat',
        skillPointsRequired: 0,
        selected: false
      },
      {
        id: 32,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/skills%2Fdefense%2Ficon_skill_defense_supplemental_block.jpg?alt=media&token=380e57b4-fe77-4dc5-a4cd-64d1ebbe3146',
        name: 'Supplemental Block',
        className: 'defense',
        type: 'passive',
        skillPointsRequired: 2,
        selected: false
      },
      {
        id: 33,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/skills%2Fdefense%2Ficon_skill_defense_shield_edge.jpg?alt=media&token=fdf9cc5b-9c26-46f6-8b83-bd8791904125',
        name: 'Shield Edge',
        className: 'defense',
        type: 'passive',
        skillPointsRequired: 4,
        selected: false
      },
      {
        id: 34,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/skills%2Fdefense%2Ficon_skill_defense_shield_of_steel.jpg?alt=media&token=0cdaaa1b-23e3-4a7c-80d2-e2256696f7eb',
        name: 'Shield of Steel',
        className: 'defense',
        type: 'passive',
        skillPointsRequired: 6,
        selected: false
      },
      {
        id: 35,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/skills%2Fdefense%2Ficon_skill_defense_guardian.jpg?alt=media&token=c66500a2-1210-4186-9514-478754ba9c64',
        name: 'Guardian',
        className: 'defense',
        type: 'passive',
        skillPointsRequired: 7,
        selected: false
      },
      {
        id: 36,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/skills%2Fdefense%2Ficon_skill_defense_spry_fortress.jpg?alt=media&token=529086db-d3cf-4b73-acdc-924138e1779a',
        name: 'Spry Fortress',
        className: 'defense',
        type: 'passive',
        skillPointsRequired: 8,
        selected: false
      },
      {
        id: 37,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/skills%2Fdefense%2Ficon_skill_defense_bears_vigor.jpg?alt=media&token=d6762218-177c-42f7-83fa-64a56a1e3504',
        name: "Bear's Vigor",
        className: 'defense',
        type: 'passive',
        skillPointsRequired: 9,
        selected: false
      },
      {
        id: 38,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/skills%2Fdefense%2Ficon_skill_defense_ursine_roar.jpg?alt=media&token=8cf7a955-4dee-4b2e-abfc-fe79df86671b',
        name: 'Ursine Roar',
        className: 'defense',
        type: 'passive',
        skillPointsRequired: 10,
        selected: false
      }
    ];

    that.occultismSkills = [
      {
        id: 39,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/skills%2Foccultism%2Ficon_skill_occultism_mana_stars.jpg?alt=media&token=e6e741c2-37ce-416a-8f13-da9c05175bb2',
        name: 'Mana Stars',
        className: 'occultism',
        type: 'combat',
        skillPointsRequired: 0,
        selected: false
      },
      {
        id: 40,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/skills%2Foccultism%2Ficon_skill_occultism_mana_force.jpg?alt=media&token=59a945dd-0bbd-47ac-a1ef-3b88f5437f7f',
        name: 'Mana Force',
        className: 'occultism',
        type: 'combat',
        skillPointsRequired: 0,
        selected: false
      },
      {
        id: 41,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/skills%2Foccultism%2Ficon_skill_occultism_hell_spear.jpg?alt=media&token=e40b9cab-45cd-4211-a781-0e130cae1b13',
        name: 'Hell Spear',
        className: 'occultism',
        type: 'combat',
        skillPointsRequired: 0,
        selected: false
      },
      {
        id: 42,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/skills%2Foccultism%2Ficon_skill_occultism_absorb_life_force.jpg?alt=media&token=3a414fde-f7de-43e8-8a73-e439580f92f3',
        name: 'Absorb Lifeforce',
        className: 'occultism',
        type: 'combat',
        skillPointsRequired: 0,
        selected: false
      },
      {
        id: 43,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/skills%2Foccultism%2Ficon_skill_occultism_summon_crows.jpg?alt=media&token=9b10f2eb-2396-41cd-a73e-fd08e128cdbb',
        name: 'Summon Crows',
        className: 'occultism',
        type: 'combat',
        skillPointsRequired: 0,
        selected: false
      },
      {
        id: 44,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/skills%2Foccultism%2Ficon_skill_occultism_crippling_mire.jpg?alt=media&token=b3c148a5-46e9-4acb-98ff-816ef3170b55',
        name: 'Crippling Mire',
        className: 'occultism',
        type: 'combat',
        skillPointsRequired: 0,
        selected: false
      },
      {
        id: 45,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/skills%2Foccultism%2Ficon_skill_occultism_telekinesis.jpg?alt=media&token=8c253525-cdaf-490f-88df-3c16ee4597da',
        name: 'Telekinesis',
        className: 'occultism',
        type: 'combat',
        skillPointsRequired: 0,
        selected: false
      },
      {
        id: 46,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/skills%2Foccultism%2Ficon_skill_occultism_retribution.jpg?alt=media&token=dcf4ed96-ce86-4a81-8fdf-a0f4a4129d57',
        name: 'Retribution',
        className: 'occultism',
        type: 'combat',
        skillPointsRequired: 0,
        selected: false
      },
      {
        id: 47,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/skills%2Foccultism%2Ficon_skill_occultism_stillness.jpg?alt=media&token=5adefb9c-684e-46fe-bdc2-77edcb8b174c',
        name: 'Stillness',
        className: 'occultism',
        type: 'combat',
        skillPointsRequired: 0,
        selected: false
      },
      {
        id: 48,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/skills%2Foccultism%2Ficon_skill_occultism_urgency.jpg?alt=media&token=e62e361b-812f-422e-b113-6c9847ae95aa',
        name: 'Urgency',
        className: 'occultism',
        type: 'combat',
        skillPointsRequired: 0,
        selected: false
      },
      {
        id: 49,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/skills%2Foccultism%2Ficon_skill_occultism_summon_wraith.jpg?alt=media&token=9595d910-f9fc-4ab4-9f1c-69ba0113fa46',
        name: 'Summon Wraith',
        className: 'occultism',
        type: 'combat',
        skillPointsRequired: 0,
        selected: false
      },
      {
        id: 50,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/skills%2Foccultism%2Ficon_skill_occultism_deaths_vengeance.jpg?alt=media&token=755ee5de-fc49-480a-bbb1-0e94bbe9d4a3',
        name: "Death's Vengeance",
        className: 'occultism',
        type: 'combat',
        skillPointsRequired: 0,
        selected: false
      },
      {
        id: 51,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/skills%2Foccultism%2Ficon_skill_occultism_enhanced_mana_recovery.jpg?alt=media&token=9997c45f-9672-42ca-9d22-23244ad210ab',
        name: 'Enhanced Mana Recovery',
        className: 'occultism',
        type: 'passive',
        skillPointsRequired: 2,
        selected: false
      },
      {
        id: 52,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/skills%2Foccultism%2Ficon_skill_occultism_reprisal.jpg?alt=media&token=292fd467-5344-4c0a-9e71-f4567ffd7f67',
        name: 'Reprisal',
        className: 'occultism',
        type: 'passive',
        skillPointsRequired: 4,
        selected: false
      },
      {
        id: 53,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/skills%2Foccultism%2Ficon_skill_occultism_casters_enrichment.jpg?alt=media&token=73baec56-2d3a-44cc-988c-66a938f18fd9',
        name: "Caster's Enrichment",
        className: 'occultism',
        type: 'passive',
        skillPointsRequired: 6,
        selected: false
      },
      {
        id: 54,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/skills%2Foccultism%2Ficon_skill_occultism_macabre_reach.jpg?alt=media&token=ff03e351-00d0-48f0-aa24-54ca85bf785e',
        name: 'Macabre Reach',
        className: 'occultism',
        type: 'passive',
        skillPointsRequired: 7,
        selected: false
      },
      {
        id: 55,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/skills%2Foccultism%2Ficon_skill_occultism_overpowered_spell_locus.jpg?alt=media&token=cf44ecc5-9bb3-4ffe-92d3-4b698ff2767b',
        name: 'Overpowered Spell Locus',
        className: 'occultism',
        type: 'passive',
        skillPointsRequired: 8,
        selected: false
      },
      {
        id: 56,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/skills%2Foccultism%2Ficon_skill_occultism_intensified_harm.jpg?alt=media&token=03b999ae-bbd5-4384-b3f1-f29b3e3cf3cb',
        name: 'Intensified Harm',
        className: 'occultism',
        type: 'passive',
        skillPointsRequired: 9,
        selected: false
      },
      {
        id: 57,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/skills%2Foccultism%2Ficon_skill_occultism_deaths_beckoning.jpg?alt=media&token=4637c04d-f9f7-4977-826d-76a91a94cd27',
        name: "Death's Beckoning",
        className: 'occultism',
        type: 'passive',
        skillPointsRequired: 10,
        selected: false
      }
    ];

    that.sorcerySkills = [
      {
        id: 58,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/skills%2Fsorcery%2Ficon_skill_sorcery_flamebolt.jpg?alt=media&token=4af00be3-ae8d-433d-95e7-5fcc81aac6d9',
        name: 'Flamebolt',
        className: 'sorcery',
        type: 'combat',
        skillPointsRequired: 0,
        selected: false
      },
      {
        id: 59,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/skills%2Fsorcery%2Ficon_skill_sorcery_freezing_arrow.jpg?alt=media&token=b6dca49f-7f05-4210-ace4-7af34d5daa3b',
        name: 'Freezing Arrow',
        className: 'sorcery',
        type: 'combat',
        skillPointsRequired: 0,
        selected: false
      },
      {
        id: 60,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/skills%2Fsorcery%2Ficon_skill_sorcery_insultating_lense.jpg?alt=media&token=850e5d57-46d1-4f3c-8f59-2f5494287472',
        name: 'Insulating Lens',
        className: 'sorcery',
        type: 'combat',
        skillPointsRequired: 0,
        selected: false
      },
      {
        id: 61,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/skills%2Fsorcery%2Ficon_skill_sorcery_arc_lightning.jpg?alt=media&token=c44a5865-cac0-4bb6-b5ce-acb350f8f9a7',
        name: 'Arc Lightning',
        className: 'sorcery',
        type: 'combat',
        skillPointsRequired: 0,
        selected: false
      },
      {
        id: 62,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/skills%2Fsorcery%2Ficon_skill_sorcery_freezing_earth.jpg?alt=media&token=71f52d15-4416-4b65-a624-0be6fdb0c785',
        name: 'Freezing Earth',
        className: 'sorcery',
        type: 'combat',
        skillPointsRequired: 0,
        selected: false
      },
      {
        id: 63,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/skills%2Fsorcery%2Ficon_skill_sorcery_searing_rain.jpg?alt=media&token=e04b9c97-3973-4ea8-9561-969419f15336',
        name: 'Searing Rain',
        className: 'sorcery',
        type: 'combat',
        skillPointsRequired: 0,
        selected: false
      },
      {
        id: 64,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/skills%2Fsorcery%2Ficon_skill_sorcery_frigid_tracks.jpg?alt=media&token=80826473-e180-4d0e-896d-5c2c9715f925',
        name: 'Frigid Tracks',
        className: 'sorcery',
        type: 'combat',
        skillPointsRequired: 0,
        selected: false
      },
      {
        id: 65,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/skills%2Fsorcery%2Ficon_skill_sorcery_magic_circle.jpg?alt=media&token=d724272f-65f1-4630-a571-bf7d562f8813',
        name: 'Magic Circle',
        className: 'sorcery',
        type: 'combat',
        skillPointsRequired: 0,
        selected: false
      },
      {
        id: 66,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/skills%2Fsorcery%2Ficon_skill_sorcery_chain_lightning.jpg?alt=media&token=fd7af785-32ab-4be0-8d5c-d40be32bc114',
        name: 'Chain Lightning',
        className: 'sorcery',
        type: 'combat',
        skillPointsRequired: 0,
        selected: false
      },
      {
        id: 67,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/skills%2Fsorcery%2Ficon_skill_sorcery_flame_barrier.jpg?alt=media&token=5cce673a-1ddf-4bb8-815e-9d6dc9d6514a',
        name: 'Flame Barrier',
        className: 'sorcery',
        type: 'combat',
        skillPointsRequired: 0,
        selected: false
      },
      {
        id: 68,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/skills%2Fsorcery%2Ficon_skill_sorcery_meteor_strike.jpg?alt=media&token=095fbc60-fca4-4569-a549-bba1d8472ac6',
        name: 'Meteor Strike',
        className: 'sorcery',
        type: 'combat',
        skillPointsRequired: 0,
        selected: false
      },
      {
        id: 69,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/skills%2Fsorcery%2Ficon_skill_sorcery_gods_whip.jpg?alt=media&token=850f86f0-ef5a-4644-80d6-4fd69f8175fb',
        name: "Gods' Whip",
        className: 'sorcery',
        type: 'combat',
        skillPointsRequired: 0,
        selected: false
      },
      {
        id: 70,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/skills%2Fsorcery%2Ficon_skill_sorcery_mana_pool_increase.jpg?alt=media&token=a87c8ab5-faea-4618-b5bd-599c83999c59',
        name: 'Mana Pool Increase',
        className: 'sorcery',
        type: 'passive',
        skillPointsRequired: 2,
        selected: false
      },
      {
        id: 71,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/skills%2Fsorcery%2Ficon_skill_sorcery_magic_range_boost.jpg?alt=media&token=52789dcb-070b-4c9b-821b-ccd6676194e7',
        name: 'Magic Range Boost',
        className: 'sorcery',
        type: 'passive',
        skillPointsRequired: 4,
        selected: false
      },
      {
        id: 72,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/skills%2Fsorcery%2Ficon_skill_sorcery_efficient_sorcery.jpg?alt=media&token=6ef75e72-7e5f-42f4-87a5-e0670aabba09',
        name: 'Efficient Sorcery',
        className: 'sorcery',
        type: 'passive',
        skillPointsRequired: 6,
        selected: false
      },
      {
        id: 73,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/skills%2Fsorcery%2Ficon_skill_sorcery_mana_flurry.jpg?alt=media&token=c0ebb062-8d93-4d7c-bd6e-1a9aa2e3ddc4',
        name: 'Mana Flurry',
        className: 'sorcery',
        type: 'passive',
        skillPointsRequired: 7,
        selected: false
      },
      {
        id: 74,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/skills%2Fsorcery%2Ficon_skill_sorcery_recuperation.jpg?alt=media&token=6d63df2e-5ed7-4b97-b791-4bc33c3d9afc',
        name: 'Recuperation',
        className: 'sorcery',
        type: 'passive',
        skillPointsRequired: 8,
        selected: false
      },
      {
        id: 75,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/skills%2Fsorcery%2Ficon_skill_sorcery_magic_precision.jpg?alt=media&token=bd2f513f-132f-4ba6-b9fe-fb1d9a2a0c93',
        name: 'Magic Precision',
        className: 'sorcery',
        type: 'passive',
        skillPointsRequired: 9,
        selected: false
      },
      {
        id: 76,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/skills%2Fsorcery%2Ficon_skill_sorcery_aranzebs_infusion.jpg?alt=media&token=a42a788e-a952-4f6d-bdae-f8ff1855e8de',
        name: "Aranzeb's Infusion",
        className: 'sorcery',
        type: 'passive',
        skillPointsRequired: 10,
        selected: false
      }
    ];

    that.songcraftSkills = [
      {
        id: 77,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/skills%2Fsongcraft%2Ficon_skill_songcraft_critical_discord.jpg?alt=media&token=27da2a27-9158-482b-9ea1-57a70d14d4b0',
        name: 'Critical Discord',
        className: 'songcraft',
        type: 'combat',
        skillPointsRequired: 0,
        selected: false
      },
      {
        id: 78,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/skills%2Fsongcraft%2Ficon_skill_songcraft_startling_strain.jpg?alt=media&token=cb15d7cc-898b-4f90-b9cf-6a380e54785f',
        name: 'Startling Strain',
        className: 'songcraft',
        type: 'combat',
        skillPointsRequired: 0,
        selected: false
      },
      {
        id: 79,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/skills%2Fsongcraft%2Ficon_skill_songcraft_quickstep.jpg?alt=media&token=c76024f2-5448-485c-bb27-9aa77c744fd3',
        name: '[Perform] Quick Step',
        className: 'songcraft',
        type: 'combat',
        skillPointsRequired: 0,
        selected: false
      },
      {
        id: 80,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/skills%2Fsongcraft%2Ficon_skill_songcraft_dissonance.jpg?alt=media&token=a9e60a31-6838-4aec-b9be-c675819104fb',
        name: 'Dissonance',
        className: 'songcraft',
        type: 'combat',
        skillPointsRequired: 0,
        selected: false
      },
      {
        id: 81,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/skills%2Fsongcraft%2Ficon_skill_songcraft_healing_hymn.jpg?alt=media&token=27930847-efe8-498f-8c5b-66567178c9ce',
        name: 'Healing Hymn',
        className: 'songcraft',
        type: 'combat',
        skillPointsRequired: 0,
        selected: false
      },
      {
        id: 82,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/skills%2Fsongcraft%2Ficon_skill_songcraft_hummingbird_ditty.jpg?alt=media&token=53a7cf07-9e71-472a-bed7-3e4ddce06140',
        name: 'Hummingbird Ditty',
        className: 'songcraft',
        type: 'combat',
        skillPointsRequired: 0,
        selected: false
      },
      {
        id: 83,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/skills%2Fsongcraft%2Ficon_skill_songcraft_ode_to_recovery.jpg?alt=media&token=53d1cbc7-379f-46fb-812e-1efed0e4ba10',
        name: '[Perform] Ode to Recovery',
        className: 'songcraft',
        type: 'combat',
        skillPointsRequired: 0,
        selected: false
      },
      {
        id: 84,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/skills%2Fsongcraft%2Ficon_skill_songcraft_rhythmic_renewal.jpg?alt=media&token=43bd039f-d252-41fa-bce4-373868d0bfd0',
        name: 'Rhythmic Renewal',
        className: 'songcraft',
        type: 'combat',
        skillPointsRequired: 0,
        selected: false
      },
      {
        id: 85,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/skills%2Fsongcraft%2Ficon_skill_songcraft_bulwark_ballad.jpg?alt=media&token=205ff617-14b4-47da-beb8-ca48595d94ef',
        name: '[Perform] Bulwark Ballad',
        className: 'songcraft',
        type: 'combat',
        skillPointsRequired: 0,
        selected: false
      },
      {
        id: 86,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/skills%2Fsongcraft%2Ficon_skill_songcraft_bloody_chantey.jpg?alt=media&token=5af2eb24-38d3-4c55-8282-856c12a724db',
        name: '[Perform] Bloody Chantey',
        className: 'songcraft',
        type: 'combat',
        skillPointsRequired: 0,
        selected: false
      },
      {
        id: 87,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/skills%2Fsongcraft%2Ficon_skill_songcraft_alarm_call.jpg?alt=media&token=8c5d9c43-b6ee-4781-b22c-5726f4bbd74a',
        name: 'Alarm Call',
        className: 'songcraft',
        type: 'combat',
        skillPointsRequired: 0,
        selected: false
      },
      {
        id: 88,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/skills%2Fsongcraft%2Ficon_skill_songcraft_griefs_cadence.jpg?alt=media&token=99bbefda-35b0-43d1-aa26-9651dace26fe',
        name: "[Perform] Grief's Cadence",
        className: 'songcraft',
        type: 'combat',
        skillPointsRequired: 0,
        selected: false
      },
      {
        id: 89,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/skills%2Fsongcraft%2Ficon_skill_songcraft_snycopation.jpg?alt=media&token=4942ad90-f89c-430c-a85f-deb05fbc3b58',
        name: 'Syncopation',
        className: 'songcraft',
        type: 'passive',
        skillPointsRequired: 2,
        selected: false
      },
      {
        id: 90,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/skills%2Fsongcraft%2Ficon_skill_songcraft_hold_the_note.jpg?alt=media&token=37da3a54-04d9-4b91-955d-86bc35cd7246',
        name: 'Hold the Note',
        className: 'songcraft',
        type: 'passive',
        skillPointsRequired: 4,
        selected: false
      },
      {
        id: 91,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/skills%2Fsongcraft%2Ficon_skill_songcraft_uptempo.jpg?alt=media&token=bb431bd0-fc74-4160-80fa-834475660b61',
        name: 'Uptempo',
        className: 'songcraft',
        type: 'passive',
        skillPointsRequired: 6,
        selected: false
      },
      {
        id: 92,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/skills%2Fsongcraft%2Ficon_skill_songcraft_disciplined_performance.jpg?alt=media&token=3e7c08b7-d34f-44ad-b072-938a6ed5fe95',
        name: 'Disciplined Performance',
        className: 'songcraft',
        type: 'passive',
        skillPointsRequired: 7,
        selected: false
      },
      {
        id: 93,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/skills%2Fsongcraft%2Ficon_skill_songcraft_loud_speaker.jpg?alt=media&token=a3154558-e04b-404f-9b97-f7d220c5d533',
        name: 'Loudspeaker',
        className: 'songcraft',
        type: 'passive',
        skillPointsRequired: 8,
        selected: false
      },
      {
        id: 94,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/skills%2Fsongcraft%2Ficon_skill_songcraft_allegretto.jpg?alt=media&token=c6d2efc8-e330-4090-bd1f-9af9153b6aac',
        name: 'Allegretto',
        className: 'songcraft',
        type: 'passive',
        skillPointsRequired: 9,
        selected: false
      },
      {
        id: 95,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/skills%2Fsongcraft%2Ficon_skill_songcraft_zeal.jpg?alt=media&token=11722519-9582-4847-832a-66f1689708a7',
        name: 'Zeal',
        className: 'songcraft',
        type: 'passive',
        skillPointsRequired: 10,
        selected: false
      }
    ];

    that.witchcraftSkills = [
      {
        id: 96,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/skills%2Fwitchcraft%2Ficon_skill_witchcraft_earthen_grip.jpg?alt=media&token=dce935c3-f628-4e85-af57-4c856e946e10',
        name: 'Earthen Grip',
        className: 'witchcraft',
        type: 'combat',
        skillPointsRequired: 0,
        selected: false
      },
      {
        id: 97,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/skills%2Fwitchcraft%2Ficon_skill_witchcraft_enervate.jpg?alt=media&token=a3a38923-d8e4-4ec5-b95d-d6ede4dab343',
        name: 'Enervate',
        className: 'witchcraft',
        type: 'combat',
        skillPointsRequired: 0,
        selected: false
      },
      {
        id: 98,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/skills%2Fwitchcraft%2Ficon_skill_witchcraft_bubble_trap.jpg?alt=media&token=4d32f3d9-1834-40b2-9884-ba89a0f27292',
        name: 'Bubble Trap',
        className: 'witchcraft',
        type: 'combat',
        skillPointsRequired: 0,
        selected: false
      },
      {
        id: 99,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/skills%2Fwitchcraft%2Ficon_skill_witchcraft_insidious_whisper.jpg?alt=media&token=1adfe92d-a889-49d4-af1d-de781f291848',
        name: 'Insidious Whisper',
        className: 'witchcraft',
        type: 'combat',
        skillPointsRequired: 0,
        selected: false
      },
      {
        id: 100,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/skills%2Fwitchcraft%2Ficon_skill_witchcraft_purge.jpg?alt=media&token=10305d84-0e70-47f6-a854-9e5b6dd548d6',
        name: 'Purge',
        className: 'witchcraft',
        type: 'combat',
        skillPointsRequired: 0,
        selected: false
      },
      {
        id: 101,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/skills%2Fwitchcraft%2Ficon_skill_witchcraft_play_dead.jpg?alt=media&token=1323dfab-1b63-4e88-bb25-4d6ebdf8e883',
        name: 'Play Dead',
        className: 'witchcraft',
        type: 'combat',
        skillPointsRequired: 0,
        selected: false
      },
      {
        id: 102,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/skills%2Fwitchcraft%2Ficon_skill_witchcraft_courageous_action.jpg?alt=media&token=ca2e84cf-68ae-4ecb-8205-ba6801fb0398',
        name: 'Courageous Action',
        className: 'witchcraft',
        type: 'combat',
        skillPointsRequired: 0,
        selected: false
      },
      {
        id: 103,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/skills%2Fwitchcraft%2Ficon_skill_witchcraft_lassitude.jpg?alt=media&token=5443b64e-7779-4a91-8845-a10dcfca9ff3',
        name: 'Lassitude',
        className: 'witchcraft',
        type: 'combat',
        skillPointsRequired: 0,
        selected: false
      },
      {
        id: 104,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/skills%2Fwitchcraft%2Ficon_skill_witchcraft_banshee_wail.jpg?alt=media&token=dada87aa-06ae-49df-bf3e-f22368a881f9',
        name: "Banshee's Wail",
        className: 'witchcraft',
        type: 'combat',
        skillPointsRequired: 0,
        selected: false
      },
      {
        id: 105,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/skills%2Fwitchcraft%2Ficon_skill_witchcraft_focal_concussion.jpg?alt=media&token=a9ca0b9e-8f66-44e5-a539-9fa8a2e88cfa',
        name: 'Focal Concussion',
        className: 'witchcraft',
        type: 'combat',
        skillPointsRequired: 0,
        selected: false
      },
      {
        id: 106,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/skills%2Fwitchcraft%2Ficon_skill_witchcraft_dahutas_breath.jpg?alt=media&token=e29cd24e-6ad2-4684-9a0f-aa754154372c',
        name: "Dahuta's Breath",
        className: 'witchcraft',
        type: 'combat',
        skillPointsRequired: 0,
        selected: false
      },
      {
        id: 107,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/skills%2Fwitchcraft%2Ficon_skill_witchcraft_fiends_knell.jpg?alt=media&token=2d572b8b-1dc6-46ea-89dd-6810376c45d8',
        name: "Fiend's Knell",
        className: 'witchcraft',
        type: 'combat',
        skillPointsRequired: 0,
        selected: false
      },
      {
        id: 108,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/skills%2Fwitchcraft%2Ficon_skill_witchcraft_folding_time.jpg?alt=media&token=eec358e5-04a5-4f57-b801-9d9982c7a43a',
        name: 'Folding Time',
        className: 'witchcraft',
        type: 'passive',
        skillPointsRequired: 2,
        selected: false
      },
      {
        id: 109,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/skills%2Fwitchcraft%2Ficon_skill_witchcraft_illusions_favor.jpg?alt=media&token=2e9d6d80-df3c-429c-a3cd-e2a65e46f2e3',
        name: "Illusion's Favor",
        className: 'witchcraft',
        type: 'passive',
        skillPointsRequired: 4,
        selected: false
      },
      {
        id: 110,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/skills%2Fwitchcraft%2Ficon_skill_witchcraft_magic_detection.jpg?alt=media&token=70ec63a7-2311-43eb-9edf-97006b1d2b84',
        name: 'Magic Detection',
        className: 'witchcraft',
        type: 'passive',
        skillPointsRequired: 6,
        selected: false
      },
      {
        id: 111,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/skills%2Fwitchcraft%2Ficon_skill_witchcraft_mitigation.jpg?alt=media&token=dbf3f63c-2597-4892-8842-359b28bbff05',
        name: 'Mitigation',
        className: 'witchcraft',
        type: 'passive',
        skillPointsRequired: 7,
        selected: false
      },
      {
        id: 112,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/skills%2Fwitchcraft%2Ficon_skill_witchcraft_baleful_recharge.jpg?alt=media&token=5c711d51-15ed-4957-b19c-2bbee572fcee',
        name: 'Baleful Recharge',
        className: 'witchcraft',
        type: 'passive',
        skillPointsRequired: 8,
        selected: false
      },
      {
        id: 113,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/skills%2Fwitchcraft%2Ficon_skill_witchcraft_augment_witchcraft.jpg?alt=media&token=0887196c-8cbd-45b3-bd8a-5edb0973ec4c',
        name: 'Augment Witchcraft',
        className: 'witchcraft',
        type: 'passive',
        skillPointsRequired: 9,
        selected: false
      },
      {
        id: 114,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/skills%2Fwitchcraft%2Ficon_skill_witchcraft_enshroud.jpg?alt=media&token=ddebcc91-d8e5-4771-8cb8-335a9284abfa',
        name: 'Enshroud',
        className: 'witchcraft',
        type: 'passive',
        skillPointsRequired: 10,
        selected: false
      }
    ];

    that.auramancySkills = [
      {
        id: 115,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/skills%2Fauramancy%2Ficon_skill_auramancy_thwart.jpg?alt=media&token=38a4ca73-56d3-405e-8260-d2c8467d5cf4',
        name: 'Thwart',
        className: 'auramancy',
        type: 'combat',
        skillPointsRequired: 0,
        selected: false
      },
      {
        id: 116,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/skills%2Fauramancy%2Ficon_skill_auramancy_comets_boon.jpg?alt=media&token=e83198bd-8f7c-4f26-a308-79170aa594ff',
        name: "Comet's Boon",
        className: 'auramancy',
        type: 'combat',
        skillPointsRequired: 0,
        selected: false
      },
      {
        id: 117,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/skills%2Fauramancy%2Ficon_skill_auramancy_spell_shield.jpg?alt=media&token=7934d12c-5173-4310-bd76-5a763c7969c9',
        name: 'Spell Shield',
        className: 'auramancy',
        type: 'combat',
        skillPointsRequired: 0,
        selected: false
      },
      {
        id: 118,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/skills%2Fauramancy%2Ficon_skill_auramancy_vicious_implosion.jpg?alt=media&token=9992f0d1-ccfb-4acb-85ed-e1dc4a75b22a',
        name: 'Vicious Implosion',
        className: 'auramancy',
        type: 'combat',
        skillPointsRequired: 0,
        selected: false
      },
      {
        id: 119,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/skills%2Fauramancy%2Ficon_skill_auramancy_teleportation.jpg?alt=media&token=ffa8d026-e5bc-439a-9d7c-e9fe39bf7ee3',
        name: 'Teleportation',
        className: 'auramancy',
        type: 'combat',
        skillPointsRequired: 0,
        selected: false
      },
      {
        id: 120,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/skills%2Fauramancy%2Ficon_skill_auramancy_health_lift.jpg?alt=media&token=ff5a35b5-a80c-4cef-9885-96b31d599f6f',
        name: 'Health Lift',
        className: 'auramancy',
        type: 'combat',
        skillPointsRequired: 0,
        selected: false
      },
      {
        id: 121,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/skills%2Fauramancy%2Ficon_skill_auramancy_meditate.jpg?alt=media&token=ed1a5296-5b64-41c0-8c20-df1271687b67',
        name: 'Meditate',
        className: 'auramancy',
        type: 'combat',
        skillPointsRequired: 0,
        selected: false
      },
      {
        id: 122,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/skills%2Fauramancy%2Ficon_skill_auramancy_shrug_it_off.jpg?alt=media&token=71f5e5f0-613f-4866-befd-bc4b57c1dbd9',
        name: 'Shrug it Off',
        className: 'auramancy',
        type: 'combat',
        skillPointsRequired: 0,
        selected: false
      },
      {
        id: 123,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/skills%2Fauramancy%2Ficon_skill_auramancy_liberation.jpg?alt=media&token=f2df6d89-d422-48d7-9f8d-f24680e2d131',
        name: 'Liberation',
        className: 'auramancy',
        type: 'combat',
        skillPointsRequired: 0,
        selected: false
      },
      {
        id: 124,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/skills%2Fauramancy%2Ficon_skill_auramancy_leech.jpg?alt=media&token=23aacb76-c8b4-477b-8d52-0b48f6f172c6',
        name: 'Leech',
        className: 'auramancy',
        type: 'combat',
        skillPointsRequired: 0,
        selected: false
      },
      {
        id: 125,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/skills%2Fauramancy%2Ficon_skill_auramancy_protective_wings.jpg?alt=media&token=2ababb67-f18f-4a55-a8dd-a9f5fbf7eae9',
        name: 'Protective Wings',
        className: 'auramancy',
        type: 'combat',
        skillPointsRequired: 0,
        selected: false
      },
      {
        id: 126,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/skills%2Fauramancy%2Ficon_skill_auramancy_mirror_warp.jpg?alt=media&token=7b3a92be-acb9-4939-8940-d9232c3e394d',
        name: 'Mirror Warp',
        className: 'auramancy',
        type: 'combat',
        skillPointsRequired: 0,
        selected: false
      },
      {
        id: 127,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/skills%2Fauramancy%2Ficon_skill_auramancy_absorb_damage.jpg?alt=media&token=ff83e130-4267-4493-8e4b-94fadab312af',
        name: 'Absorb Damage',
        className: 'auramancy',
        type: 'passive',
        skillPointsRequired: 2,
        selected: false
      },
      {
        id: 128,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/skills%2Fauramancy%2Ficon_skill_auramancy_hearten.jpg?alt=media&token=392248a0-b069-4280-b91d-3fcd7df28b26',
        name: 'Hearten',
        className: 'auramancy',
        type: 'passive',
        skillPointsRequired: 4,
        selected: false
      },
      {
        id: 129,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/skills%2Fauramancy%2Ficon_skill_auramancy_inspiration_cloak.jpg?alt=media&token=fc25aa8d-9502-4248-bebe-02f599bc28da',
        name: 'Inspiration Cloak',
        className: 'auramancy',
        type: 'passive',
        skillPointsRequired: 6,
        selected: false
      },
      {
        id: 130,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/skills%2Fauramancy%2Ficon_skill_auramancy_unassailable.jpg?alt=media&token=fab8b519-9079-45a1-8b0e-b479b567962f',
        name: 'Unassailable',
        className: 'auramancy',
        type: 'passive',
        skillPointsRequired: 7,
        selected: false
      },
      {
        id: 131,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/skills%2Fauramancy%2Ficon_skill_auramancy_improved_targeting.jpg?alt=media&token=2cce5aae-acc6-40ce-b338-d00b41f3e03e',
        name: 'Improved Targeting',
        className: 'auramancy',
        type: 'passive',
        skillPointsRequired: 8,
        selected: false
      },
      {
        id: 132,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/skills%2Fauramancy%2Ficon_skill_auramancy_magic_condenser.jpg?alt=media&token=bc043c78-accd-46bd-9452-72364f9997ab',
        name: 'Magic Condenser',
        className: 'auramancy',
        type: 'passive',
        skillPointsRequired: 9,
        selected: false
      },
      {
        id: 133,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/skills%2Fauramancy%2Ficon_skill_auramancy_teleportation_discipline.jpg?alt=media&token=2b29058e-48a7-4fed-bffc-317ed947143d',
        name: 'Teleporation Discipline',
        className: 'auramancy',
        type: 'passive',
        skillPointsRequired: 10,
        selected: false
      }
    ];

    that.archerySkills = [
      {
        id: 134,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/skills%2Farchery%2Ficon_skill_archery_charged_bolt.jpg?alt=media&token=11c3bb5b-3bdd-4be8-86d8-f7cfd642d996',
        name: 'Charged Bolt',
        className: 'archery',
        type: 'combat',
        skillPointsRequired: 0,
        selected: false
      },
      {
        id: 135,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/skills%2Farchery%2Ficon_skill_archery_piercing_shot.jpg?alt=media&token=f4c738cf-0f20-4289-99ad-8716a6b453de',
        name: 'Piercing Shot',
        className: 'archery',
        type: 'combat',
        skillPointsRequired: 0,
        selected: false
      },
      {
        id: 136,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/skills%2Farchery%2Ficon_skill_archery_endless_arrows.jpg?alt=media&token=71d2849f-eaf1-4bda-93ef-4194043bab07',
        name: 'Endless Arrows',
        className: 'archery',
        type: 'combat',
        skillPointsRequired: 0,
        selected: false
      },
      {
        id: 137,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/skills%2Farchery%2Ficon_skill_archery_double_recurve.jpg?alt=media&token=a073ed4f-c43e-4272-b482-0a8de02621c5',
        name: 'Double Recurve',
        className: 'archery',
        type: 'combat',
        skillPointsRequired: 0,
        selected: false
      },
      {
        id: 138,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/skills%2Farchery%2Ficon_skill_archery_deadeye.jpg?alt=media&token=20d8ca46-85a5-4f11-8153-68ef5902ba2f',
        name: 'Deadeye',
        className: 'archery',
        type: 'combat',
        skillPointsRequired: 0,
        selected: false
      },
      {
        id: 139,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/skills%2Farchery%2Ficon_skill_archery_snare.jpg?alt=media&token=01881512-5708-495d-b3e8-2b60fbbd01a8',
        name: 'Snare',
        className: 'archery',
        type: 'combat',
        skillPointsRequired: 0,
        selected: false
      },
      {
        id: 140,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/skills%2Farchery%2Ficon_skill_float.jpg?alt=media&token=3055e128-85af-40dc-b744-51fea79c8025',
        name: 'Float',
        className: 'archery',
        type: 'combat',
        skillPointsRequired: 0,
        selected: false
      },
      {
        id: 141,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/skills%2Farchery%2Ficon_skill_archery_boneyard.jpg?alt=media&token=30b361e7-3265-470c-a8de-8651cf17de5c',
        name: 'Boneyard',
        className: 'archery',
        type: 'combat',
        skillPointsRequired: 0,
        selected: false
      },
      {
        id: 142,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/skills%2Farchery%2Ficon_skill_archery_concussive_arrow.jpg?alt=media&token=3534461b-f542-4ee7-836e-71813c335f3b',
        name: 'Concussive Arrow',
        className: 'archery',
        type: 'combat',
        skillPointsRequired: 0,
        selected: false
      },
      {
        id: 143,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/skills%2Farchery%2Ficon_skill_archery_missile_rain.jpg?alt=media&token=eb3b4982-9a3f-48c5-9f51-a6a319d07979',
        name: 'Missile Rain',
        className: 'archery',
        type: 'combat',
        skillPointsRequired: 0,
        selected: false
      },
      {
        id: 144,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/skills%2Farchery%2Ficon_skill_archery_intensity.jpg?alt=media&token=e92aec0c-1da4-4934-9922-211f30430d27',
        name: 'Intensity',
        className: 'archery',
        type: 'combat',
        skillPointsRequired: 0,
        selected: false
      },
      {
        id: 145,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/skills%2Farchery%2Ficon_skill_archery_snipe.jpg?alt=media&token=71917098-1572-4111-b3c4-083ce68c4ba3',
        name: 'Snipe',
        className: 'archery',
        type: 'combat',
        skillPointsRequired: 0,
        selected: false
      },
      {
        id: 146,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/skills%2Farchery%2Ficon_skill_archery_wild_instincts.jpg?alt=media&token=58a514c8-1954-4fa3-86e5-dfd873a3c965',
        name: 'Wild Instincts',
        className: 'archery',
        type: 'passive',
        skillPointsRequired: 2,
        selected: false
      },
      {
        id: 147,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/skills%2Farchery%2Ficon_skill_archery_eagle_eyes.jpg?alt=media&token=5e0b9431-611f-4c19-9776-d965e1187734',
        name: 'Eagle Eyes',
        className: 'archery',
        type: 'passive',
        skillPointsRequired: 4,
        selected: false
      },
      {
        id: 148,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/skills%2Farchery%2Ficon_skill_archery_archery_expertise.jpg?alt=media&token=f4c96799-9983-4312-82ef-fee54b3a49fb',
        name: 'Archery Expertise',
        className: 'archery',
        type: 'passive',
        skillPointsRequired: 6,
        selected: false
      },
      {
        id: 149,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/skills%2Farchery%2Ficon_skill_archery_evasion.jpg?alt=media&token=7d74ef02-c55b-4d8e-8245-6de76f91b059',
        name: 'Evasion',
        className: 'archery',
        type: 'passive',
        skillPointsRequired: 7,
        selected: false
      },
      {
        id: 150,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/skills%2Farchery%2Ficon_skill_archery_marksman.jpg?alt=media&token=9309edc6-b5c1-4bdf-bf3c-5e02a21b70ae',
        name: 'Marksman',
        className: 'archery',
        type: 'passive',
        skillPointsRequired: 8,
        selected: false
      },
      {
        id: 151,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/skills%2Farchery%2Ficon_skill_archery_sharpshooting.jpg?alt=media&token=77f6b7e2-a453-4e59-90d4-888a12cc3239',
        name: 'Sharpshooting',
        className: 'archery',
        type: 'passive',
        skillPointsRequired: 9,
        selected: false
      },
      {
        id: 152,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/skills%2Farchery%2Ficon_skill_archery_feral_claws.jpg?alt=media&token=30a568cb-142a-417b-8103-e66dfd7635c2',
        name: 'Feral Claws',
        className: 'archery',
        type: 'passive',
        skillPointsRequired: 10,
        selected: false
      }
    ];

    that.shadowplaySkills = [
      {
        id: 153,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/skills%2Fshadowplay%2Ficon_skill_shadowplay_rapid_strike.jpg?alt=media&token=2474c23d-3b55-4fcc-afc7-43bc70d62662',
        name: 'Rapid Strike',
        className: 'shadowplay',
        type: 'combat',
        skillPointsRequired: 0,
        selected: false
      },
      {
        id: 154,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/skills%2Fshadowplay%2Ficon_skill_shadowplay_overwhelm.jpg?alt=media&token=f79638df-b3a6-4c63-8139-1fcafb75d6ee',
        name: 'Overwhelm',
        className: 'shadowplay',
        type: 'combat',
        skillPointsRequired: 0,
        selected: false
      },
      {
        id: 155,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/skills%2Fshadowplay%2Ficon_skill_shadowplay_drop_back.jpg?alt=media&token=a426f1e9-464a-4adb-ac34-864a2e4e85bf',
        name: 'Drop Back',
        className: 'shadowplay',
        type: 'combat',
        skillPointsRequired: 0,
        selected: false
      },
      {
        id: 156,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/skills%2Fshadowplay%2Ficon_skill_shadowplay_wallop.jpg?alt=media&token=ec2b7639-6be5-499b-93ec-80339f3d3ca5',
        name: 'Wallop',
        className: 'shadowplay',
        type: 'combat',
        skillPointsRequired: 0,
        selected: false
      },
      {
        id: 157,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/skills%2Fshadowplay%2Ficon_skill_shadowplay_stalkers_mark.jpg?alt=media&token=1f42c60e-0969-48e3-a874-dc9edb36b9ef',
        name: "Stalker's Mark",
        className: 'shadowplay',
        type: 'combat',
        skillPointsRequired: 0,
        selected: false
      },
      {
        id: 158,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/skills%2Fshadowplay%2Ficon_skill_shadowplay_stealth.jpg?alt=media&token=4589a282-0032-4cfd-bd20-e03b339e5d7c',
        name: 'Stealth',
        className: 'shadowplay',
        type: 'combat',
        skillPointsRequired: 0,
        selected: false
      },
      {
        id: 159,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/skills%2Fshadowplay%2Ficon_skill_shadowplay_toxic_shot.jpg?alt=media&token=325e73d6-4439-4b86-898f-360ea1bf84b9',
        name: 'Toxic Shot',
        className: 'shadowplay',
        type: 'combat',
        skillPointsRequired: 0,
        selected: false
      },
      {
        id: 160,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/skills%2Fshadowplay%2Ficon_skill_shadowplay_pin_down.jpg?alt=media&token=6d697df5-1544-418d-9499-bbc7283d5f09',
        name: 'Pin Down',
        className: 'shadowplay',
        type: 'combat',
        skillPointsRequired: 0,
        selected: false
      },
      {
        id: 161,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/skills%2Fshadowplay%2Ficon_skill_shadowplay_shadowsmite.jpg?alt=media&token=efc4269f-5850-4751-98e4-3bbc0f493568',
        name: 'Shadowsmite',
        className: 'shadowplay',
        type: 'combat',
        skillPointsRequired: 0,
        selected: false
      },
      {
        id: 162,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/skills%2Fshadowplay%2Ficon_skill_shadowplay_freerunner.jpg?alt=media&token=27e8c210-51a3-408d-b9a1-bd7326824f57',
        name: 'Freerunner',
        className: 'shadowplay',
        type: 'combat',
        skillPointsRequired: 0,
        selected: false
      },
      {
        id: 163,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/skills%2Fshadowplay%2Ficon_skill_shadowplay_shadow_step.jpg?alt=media&token=5ecdd4ba-30a4-4599-a164-bf04bd0f73b0',
        name: 'Shadow Step',
        className: 'shadowplay',
        type: 'combat',
        skillPointsRequired: 0,
        selected: false
      },
      {
        id: 164,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/skills%2Fshadowplay%2Ficon_skill_shadowplay_throw_dagger.jpg?alt=media&token=5c8758dd-8bbc-4d8e-8322-c75f8abbeec3',
        name: 'Throw Dagger',
        className: 'shadowplay',
        type: 'combat',
        skillPointsRequired: 0,
        selected: false
      },
      {
        id: 165,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/skills%2Fshadowplay%2Ficon_skill_shadowplay_evasive_counterstrike.jpg?alt=media&token=ce342c51-d42a-494d-ad80-15d7e00c2fc2',
        name: 'Evasive Counterstike',
        className: 'shadowplay',
        type: 'passive',
        skillPointsRequired: 2,
        selected: false
      },
      {
        id: 166,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/skills%2Fshadowplay%2Ficon_skill_shadowplay_consecutive_evasion.jpg?alt=media&token=6877d2fb-e772-4b09-ba16-773c8b69cbe3',
        name: 'Consecutive Evason',
        className: 'shadowplay',
        type: 'passive',
        skillPointsRequired: 4,
        selected: false
      },
      {
        id: 167,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/skills%2Fshadowplay%2Ficon_skill_shadowplay_disregard.jpg?alt=media&token=6410a88a-8c76-42e9-8111-25cdfda297dc',
        name: 'Disregard',
        className: 'shadowplay',
        type: 'passive',
        skillPointsRequired: 6,
        selected: false
      },
      {
        id: 168,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/skills%2Fshadowplay%2Ficon_skill_shadowplay_loophole.jpg?alt=media&token=a8f76656-3688-4797-94aa-04c7c0822dce',
        name: 'Loophole',
        className: 'shadowplay',
        type: 'passive',
        skillPointsRequired: 7,
        selected: false
      },
      {
        id: 169,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/skills%2Fshadowplay%2Ficon_skill_shadowplay_piercing.jpg?alt=media&token=e7de8019-1290-4446-bf20-0cb1babc08c3',
        name: 'Piercing',
        className: 'shadowplay',
        type: 'passive',
        skillPointsRequired: 8,
        selected: false
      },
      {
        id: 170,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/skills%2Fshadowplay%2Ficon_skill_shadowplay_bloodthirst_intensified.jpg?alt=media&token=182d902d-619e-4c36-960b-b61b8b42b0a6',
        name: 'Bloodthirst Intensified',
        className: 'shadowplay',
        type: 'passive',
        skillPointsRequired: 9,
        selected: false
      },
      {
        id: 171,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/skills%2Fshadowplay%2Ficon_skill_shadowplay_shadow_mastery.jpg?alt=media&token=bf06e03a-e4ce-47d9-92f1-fbb462212a08',
        name: 'Shadow Mastery',
        className: 'shadowplay',
        type: 'passive',
        skillPointsRequired: 10,
        selected: false
      }
    ];

    that.vitalismSkills = [
      {
        id: 172,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/skills%2Fvitalism%2Ficon_skill_vitalism_holy_bolt.jpg?alt=media&token=cc1eb132-976a-493e-830f-745f27e83fb5',
        name: 'Holy Bolt',
        className: 'vitalism',
        type: 'combat',
        skillPointsRequired: 0,
        selected: false
      },
      {
        id: 173,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/skills%2Fvitalism%2Ficon_skill_vitalism_mirror_light.jpg?alt=media&token=cc099f14-2987-4a7d-a4bc-1bd23332b693',
        name: 'Mirror Light',
        className: 'vitalism',
        type: 'combat',
        skillPointsRequired: 0,
        selected: false
      },
      {
        id: 174,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/skills%2Fvitalism%2Ficon_skill_vitalism_antithesis.jpg?alt=media&token=76523380-02a2-45a4-8f73-274cc39ccf44',
        name: 'Antithesis',
        className: 'vitalism',
        type: 'combat',
        skillPointsRequired: 0,
        selected: false
      },
      {
        id: 175,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/skills%2Fvitalism%2Ficon_skill_vitalism_resurgence.jpg?alt=media&token=f6a33b19-6408-46aa-a6b0-68a66c20bb33',
        name: 'Resurgence',
        className: 'vitalism',
        type: 'combat',
        skillPointsRequired: 0,
        selected: false
      },
      {
        id: 176,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/skills%2Fvitalism%2Ficon_skill_vitalism_revive.jpg?alt=media&token=f4257395-ea6a-4163-9c8a-9eb856e8e563',
        name: 'Revive',
        className: 'vitalism',
        type: 'combat',
        skillPointsRequired: 0,
        selected: false
      },
      {
        id: 177,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/skills%2Fvitalism%2Ficon_skill_vitalism_skewer.jpg?alt=media&token=6d3b479a-ebad-447b-a748-f6cb4078d9ed',
        name: 'Skewer',
        className: 'vitalism',
        type: 'combat',
        skillPointsRequired: 0,
        selected: false
      },
      {
        id: 178,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/skills%2Fvitalism%2Ficon_skill_vitalism_mend.jpg?alt=media&token=a6e4ed5a-b0f8-483d-b515-704489125745',
        name: 'Mend',
        className: 'vitalism',
        type: 'combat',
        skillPointsRequired: 0,
        selected: false
      },
      {
        id: 179,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/skills%2Fvitalism%2Ficon_skill_vitalism_aranzebs_boon.jpg?alt=media&token=f948714e-d08a-47ba-9c7c-944c63f1c0e8',
        name: "Aranzeb's Boon",
        className: 'vitalism',
        type: 'combat',
        skillPointsRequired: 0,
        selected: false
      },
      {
        id: 180,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/skills%2Fvitalism%2Ficon_skill_vitalism_renewal.jpg?alt=media&token=6b740760-9b86-4b13-8c6e-0ce0b135bafa',
        name: 'Renewal',
        className: 'vitalism',
        type: 'combat',
        skillPointsRequired: 0,
        selected: false
      },
      {
        id: 181,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/skills%2Fvitalism%2Ficon_skill_vitalism_fervent_healing.jpg?alt=media&token=72913eb7-75a0-4da4-8e2a-2710ca41945f',
        name: 'Fervent Healing',
        className: 'vitalism',
        type: 'combat',
        skillPointsRequired: 0,
        selected: false
      },
      {
        id: 182,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/skills%2Fvitalism%2Ficon_skill_vitalism_infuse.jpg?alt=media&token=ca850b1e-d04c-4ab7-9b29-b418c29953d3',
        name: 'Infuse',
        className: 'vitalism',
        type: 'combat',
        skillPointsRequired: 0,
        selected: false
      },
      {
        id: 183,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/skills%2Fvitalism%2Ficon_skill_vitalism_whirlwinds_blessing.jpg?alt=media&token=c4d2d798-7757-4d02-a69c-4f7d17ac1a2f',
        name: "Whirlwind's Blessing",
        className: 'vitalism',
        type: 'combat',
        skillPointsRequired: 0,
        selected: false
      },
      {
        id: 184,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/skills%2Fvitalism%2Ficon_skill_vitalism_painful_recharge.jpg?alt=media&token=4a512bb8-1c51-464e-a973-96a2fad56a18',
        name: 'Painful Recharge',
        className: 'vitalism',
        type: 'passive',
        skillPointsRequired: 2,
        selected: false
      },
      {
        id: 185,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/skills%2Fvitalism%2Ficon_skill_vitalism_quick_recovery.jpg?alt=media&token=7f1f31ba-6ba6-4601-9b04-8bb2b42b1ad7',
        name: 'Quick Recovery',
        className: 'vitalism',
        type: 'passive',
        skillPointsRequired: 4,
        selected: false
      },
      {
        id: 186,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/skills%2Fvitalism%2Ficon_skill_vitalism_spirit_growth.jpg?alt=media&token=8c7097d5-b7b6-48f5-a4b3-2373e9c54a77',
        name: 'Spirit Growth',
        className: 'vitalism',
        type: 'passive',
        skillPointsRequired: 6,
        selected: false
      },
      {
        id: 187,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/skills%2Fvitalism%2Ficon_skill_vitalism_alms.jpg?alt=media&token=9a03e351-e799-40fa-96f7-f4db4e7fee58',
        name: 'Alms',
        className: 'vitalism',
        type: 'passive',
        skillPointsRequired: 7,
        selected: false
      },
      {
        id: 188,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/skills%2Fvitalism%2Ficon_skill_vitalism_invigorated_healing.jpg?alt=media&token=dac2ca6d-bd4a-4e18-ba48-7773fe9521ee',
        name: 'Invigorated Healing',
        className: 'vitalism',
        type: 'passive',
        skillPointsRequired: 8,
        selected: false
      },
      {
        id: 189,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/skills%2Fvitalism%2Ficon_skill_vitalism_defiance.jpg?alt=media&token=ed0e4333-f2e3-4434-8ba8-55a6db801b0c',
        name: 'Defiance',
        className: 'vitalism',
        type: 'passive',
        skillPointsRequired: 9,
        selected: false
      },
      {
        id: 190,
        icon: 'https://firebasestorage.googleapis.com/v0/b/archeage-database-a6d52.appspot.com/o/skills%2Fvitalism%2Ficon_skill_vitalism_joyous_spirit.jpg?alt=media&token=4132ae2b-ced2-4bf4-b7ce-7c0aece02a02',
        name: 'Joyous Spirit',
        className: 'vitalism',
        type: 'passive',
        skillPointsRequired: 10,
        selected: false
      }
    ];

    // for (let j = 0; j < 19; j++) {
    //   that._database.createSkill(that.battlerageSkills[j],this.battlerageSkills[j]["id"]);
    //   that._database.createSkill(that.defenseSkills[j],this.defenseSkills[j]["id"]);
    //   that._database.createSkill(that.occultismSkills[j],this.occultismSkills[j]["id"]);
    //   that._database.createSkill(that.sorcerySkills[j],this.sorcerySkills[j]["id"]);
    //   that._database.createSkill(that.songcraftSkills[j],this.songcraftSkills[j]["id"]);
    //   that._database.createSkill(that.witchcraftSkills[j],this.witchcraftSkills[j]["id"]);
    //   that._database.createSkill(that.auramancySkills[j],this.auramancySkills[j]["id"]);
    //   that._database.createSkill(that.archerySkills[j],this.archerySkills[j]["id"]);
    //   that._database.createSkill(that.shadowplaySkills[j],this.shadowplaySkills[j]["id"]);
    //   that._database.createSkill(that.vitalismSkills[j],this.vitalismSkills[j]["id"]);
    // }
  }
  changeSkillPointCount(level: number) {
    if (level > 0 && level < 3) {
      this.skillPointCount = 1;
    }

    else if (level >= 3 && level < 5) {
      this.skillPointCount = 2;
    }

    else if (level >= 5 && level < 8) {
      this.skillPointCount = 4;
    }

    else if (level >= 8 && level < 10) {
      this.skillPointCount = 5;
    }

    else if (level >= 10 && level < 13) {
      this.skillPointCount = 7;
    }

    else if (level >= 13 && level < 15) {
      this.skillPointCount = 8;
    }

    else if (level >= 15 && level < 18) {
      this.skillPointCount = 9;
    }

    else if (level >= 18 && level < 20) {
      this.skillPointCount = 10;
    }

    else if (level >= 20 && level < 23) {
      this.skillPointCount = 11;
    }

    else if (level >= 23 && level < 25) {
      this.skillPointCount = 12;
    }

    else if (level >= 25 && level < 28) {
      this.skillPointCount = 13;
    }

    else if (level >= 28 && level < 30) {
      this.skillPointCount = 14;
    }

    else if (level >= 30 && level < 33) {
      this.skillPointCount = 15;
    }

    else if (level >= 33 && level < 35) {
      this.skillPointCount = 16;
    }

    else if (level >= 35 && level < 38) {
      this.skillPointCount = 17;
    }

    else if (level >= 38 && level < 40) {
      this.skillPointCount = 18;
    }

    else if (level >= 40 && level < 43) {
      this.skillPointCount = 19;
    }

    else if (level >= 43 && level < 45) {
      this.skillPointCount = 20;
    }

    else if (level >= 45 && level < 48) {
      this.skillPointCount = 21;
    }

    else if (level >= 48 && level < 50) {
      this.skillPointCount = 22;
    }

    else if (level == 50) {
      this.skillPointCount = 23;
    }

    else if (level == 51) {
      this.skillPointCount = 24;
    }

    else if (level == 52) {
      this.skillPointCount = 25;
    }

    else if (level == 53) {
      this.skillPointCount = 26;
    }

    else if (level == 54) {
      this.skillPointCount = 27;
    }

    else if (level == 55) {
      this.skillPointCount = 28;
    }
  }

  leftSkillPointSet (column) {
    this.leftSkillsResetArray.push(column);
    this.leftSkillsResetArray = this.unique(this.leftSkillsResetArray);
    if (this.leftSkillPoints >= (column.skillPointsRequired-1) && this.skillPointCount >= 0) {
      if (this.skillPointCount > 0) {
        column.selected = !column.selected;
      }
      if (column.selected === true && this.skillPointCount > 0) {
        this.leftSkillPoints++;
        this.skillPointCount--;
      }
      else if(column.selected === false && this.leftSkillPoints > 0 && this.skillPointCount > 0) {
        this.leftSkillPoints--;
        this.skillPointCount++;
      }
      else if (this.skillPointCount === 0 && column.selected === true && this.leftSkillPoints > 0) {
        this.leftSkillPoints--;
        this.skillPointCount++;
        column.selected = false;
      }
    }
  };

  middleSkillPointSet (column) {
    this.middleSkillsResetArray.push(column);
    this.middleSkillsResetArray = this.unique(this.middleSkillsResetArray);
    if (this.middleSkillPoints >= (column.skillPointsRequired-1) && this.skillPointCount >= 0) {
      if (this.skillPointCount > 0) {
        column.selected = !column.selected;
      }
      if (column.selected === true && this.skillPointCount > 0) {
        this.middleSkillPoints++;
        this.skillPointCount--;
      }
      else if (column.selected === false && this.middleSkillPoints > 0 && this.skillPointCount > 0) {
        this.middleSkillPoints--;
        this.skillPointCount++;
      }
      else if (this.skillPointCount === 0 && column.selected === true && this.middleSkillPoints > 0) {
        this.middleSkillPoints--;
        this.skillPointCount++;
        column.selected = false;
      }
    }
  };

  rightSkillPointSet (column) {
    this.rightSkillsResetArray.push(column);
    this.rightSkillsResetArray = this.unique(this.rightSkillsResetArray);
    if (this.rightSkillPoints >= (column.skillPointsRequired-1) && this.skillPointCount >= 0) {
      if (this.skillPointCount > 0) {
        column.selected = !column.selected;
      }
      if (column.selected === true && this.skillPointCount > 0) {
        this.rightSkillPoints++;
        this.skillPointCount--;
      }
      else if (column.selected === false && this.rightSkillPoints > 0 && this.skillPointCount > 0) {
        this.rightSkillPoints--;
        this.skillPointCount++;
      }
      else if (this.skillPointCount === 0 && column.selected === true && this.rightSkillPoints > 0) {
        this.rightSkillPoints--;
        this.skillPointCount++;
        column.selected = false;
      }
    }
  };

  leftSelectedClass(column): string{
    if (column.selected === true && this.leftSkillPoints >= column.skillPointsRequired) {
      return 'skill-avatar-selected';
    }

    return 'skill-avatar';
  }

  middleSelectedClass(column): string{
    if (column.selected === true && this.middleSkillPoints >= column.skillPointsRequired) {
      return 'skill-avatar-selected';
    }

    return 'skill-avatar';
  }

  rightSelectedClass(column): string{
    if (column.selected === true && this.rightSkillPoints >= column.skillPointsRequired) {
      return 'skill-avatar-selected';
    }

    return 'skill-avatar';
  }

  showPossibleClasses() {
    this.showPossibleClass = !this.showPossibleClass;
  }

  closePossibleClasses() {
    let element = document.getElementById('skillSetBox');
    let offSet = element.offsetTop;
    window.scrollTo(0, offSet);
    this.showPossibleClass = false;
  }

  showLeftSkillSet(name: string) {
    let that = this;
    this.leftSkillsTitle = name;
    this.leftSkillsName = name.toLowerCase();
    this.showLeftSkills = true;
    that.filterSkills(that.customSkills, that.leftSkillsName);
  }

  showMiddleSkillSet(name: string) {
    let that = this;
    this.middleSkillsTitle = name;
    this.middleSkillsName = name.toLowerCase();
    this.showMiddleSkills = true;
    that.filterSkills(that.customSkills, that.middleSkillsName);
  }

  showRightSkillSet(name: string) {
    let that = this;
    this.rightSkillsTitle = name;
    that.rightSkillsName = name.toLowerCase();
    that.showRightSkills = true;
    that.filterSkills(that.customSkills, that.rightSkillsName);
  }

  showSkillSet(className: any) {
    let that = this;
    if (that.leftSkillsName !== undefined && that.middleSkillsName !== undefined && that.rightSkillsName !== undefined) {
      that.addToSkills(that.leftSkillsName);
      that.addToSkills(that.middleSkillsName);
      that.addToSkills(that.rightSkillsName);
      that.classNameFromSkills = [];
    }
    that.leftSkillsTitle = className['skillSet1'];
    that.leftSkillsName = className['skillSet1'].toLowerCase();
    that.middleSkillsTitle = className['skillSet2'];
    that.middleSkillsName = className['skillSet2'].toLowerCase();
    that.rightSkillsTitle = className['skillSet3'];
    that.rightSkillsName = className['skillSet3'].toLowerCase();
    that.showLeftSkills = true;
    that.showMiddleSkills = true;
    that.showRightSkills = true;
    that.filterSkills(that.customSkills, that.leftSkillsName);
    that.filterSkills(that.customSkills, that.middleSkillsName);
    that.filterSkills(that.customSkills, that.rightSkillsName);
    let element = document.getElementById('skillSetBox');
    let offSet = element.offsetTop;
    window.scrollTo(0, offSet);
  }

  hideLeftSkillSet() {
    this.addToSkills(this.leftSkillsName);
    this.leftSkillsTitle = '';
    this.resetLeftSkillSet();
    this.showLeftSkills = false;
  }

  hideMiddleSkillSet() {
    this.addToSkills(this.middleSkillsName);
    this.middleSkillsTitle = '';
    this.resetMiddleSkillSet();
    this.showMiddleSkills = false;
  }

  hideRightSkillSet() {
    this.addToSkills(this.rightSkillsName);
    this.rightSkillsTitle = '';
    this.resetRightSkillSet();
    this.showRightSkills = false;
  }

  resetLeftSkillSet() {
    let that = this;
    for(let i = 0; i < this.leftSkillsResetArray.length; i++) {
      this.leftSkillsResetArray[i]['selected'] = false;
    }
    if (!isUndefined(that.leftSkills)) {
      for (let i = 0; i < that.allSkills.length; i++) {
        if (that.allSkills[i]['className'] === that.savedBuild['leftSkillsTitle'].toLowerCase()) {
          for (let j = 0; j < that.leftSkills.length; j++) {
            if (that.allSkills[i]['name'] === that.leftSkills[j]['name']) {
              that.allSkills[i]['selected'] = false;
            }
          }
        }
      }
    }
    this.skillPointCount = this.skillPointCount + this.leftSkillPoints;
    this.leftSkillPoints = 0;
  }

  resetMiddleSkillSet() {
    let that = this;
    for(let i = 0; i < this.middleSkillsResetArray.length; i++) {
      this.middleSkillsResetArray[i]['selected'] = false;
    }
    if (!isUndefined(that.middleSkills)) {
      for (let i = 0; i < that.allSkills.length; i++) {
        if (that.allSkills[i]['className'] === that.savedBuild['middleSkillsTitle'].toLowerCase()) {
          for (let j = 0; j < that.middleSkills.length; j++) {
            if (that.allSkills[i]['name'] === that.middleSkills[j]['name']) {
              that.allSkills[i]['selected'] = false;
            }
          }
        }
      }
    }
    this.skillPointCount = this.skillPointCount + this.middleSkillPoints;
    this.middleSkillPoints = 0;
  }

  resetRightSkillSet() {
    let that = this;
    for(let i = 0; i < this.rightSkillsResetArray.length; i++) {
      this.rightSkillsResetArray[i]['selected'] = false;
    }
    if (!isUndefined(that.rightSkills)) {
      for (let i = 0; i < that.allSkills.length; i++) {
        if (that.allSkills[i]['className'] === that.savedBuild['rightSkillsTitle'].toLowerCase()) {
          for (let j = 0; j < that.rightSkills.length; j++) {
            if (that.allSkills[i]['name'] === that.rightSkills[j]['name']) {
              that.allSkills[i]['selected'] = false;
            }
          }
        }
      }
    }
    this.skillPointCount = this.skillPointCount + this.rightSkillPoints;
    this.rightSkillPoints = 0;
  }

  capitalize(word: string) {
    return word.charAt(0).toUpperCase() + word.substr(1).toLowerCase();
  }

  filterSkills(skillsArray: Array<Object>, result) {
    let that = this;
    for(let i = 0; i < skillsArray.length; i++) {
      if (skillsArray[i]['name'].toLowerCase() === result) {
        that.classNameFromSkills.push(skillsArray[i]);
        that.customSkills.splice(that.customSkills.indexOf(skillsArray[i]), 1);
        that.classNameFromSkills = that.unique(that.classNameFromSkills);
      }
    }
  }

  addToSkills(result: string) {
    let that = this;
    for(let i = 0; i < that.skills.length; i++) {
      if(that.skills[i]['name'].toLowerCase() === result) {
        let index = that.skills.indexOf(that.skills[i]);
        that.customSkills.splice(index, 0, that.skills[i]);
        that.classNameFromSkills.splice(that.classNameFromSkills.indexOf(that.skills[i]),1);
      }
    }
  }

  saveBuild() {
    let id = Math.floor(Math.random() * 100000) + 1;
    let rightSkills = [];
    let middleSkills = [];
    let leftSkills = [];
    let tuple = {};

    for (let i = 0; i < this.allSkills.length; i++) {
      if (this.allSkills[i]['className'] === this.rightSkillsName && this.allSkills[i]['selected'] === true) {
        rightSkills.push(this.allSkills[i])
      }
      if (this.allSkills[i]['className'] === this.middleSkillsName && this.allSkills[i]['selected'] === true) {
        middleSkills.push(this.allSkills[i]);
      }
      if (this.allSkills[i]['className'] === this.leftSkillsName && this.allSkills[i]['selected'] === true) {
        leftSkills.push(this.allSkills[i])
      }
    }

    let className = document.getElementById('skill-class-name').innerHTML;

    tuple['leftSkills'] = leftSkills;
    tuple['middleSkills'] = middleSkills;
    tuple['rightSkills'] = rightSkills;
    tuple['leftSkillsTitle'] = this.leftSkillsTitle;
    tuple['middleSkillsTitle'] = this.middleSkillsTitle;
    tuple['rightSkillsTitle'] = this.rightSkillsTitle;
    tuple['leftSkillsPoints'] = this.leftSkillPoints;
    tuple['middleSkillsPoints'] = this.middleSkillPoints;
    tuple['rightSkillsPoints'] = this.rightSkillPoints;
    tuple['skillPoints'] = this.skillPointCount;
    tuple['className'] = className;
    this._database.saveBuild(id, tuple);
    this.savedBuildLink = 'https://archeage-database-a6d52.firebaseapp.com/#/calculator/' + id;
    this.showSavedBuildLink = true;
  }

  unique(origArr) {
    let newArr = [];
    let origLen = origArr.length;
    let found;
    let x;
    let y;

    for (x = 0; x < origLen; x++) {
      found = undefined;
      for (y = 0; y < newArr.length; y++) {
        if (origArr[x] === newArr[y]) {
          found = true;
          break;
        }
      }
      if (!found) {
        newArr.push(origArr[x]);
      }
    }
    return newArr;
  }
}
