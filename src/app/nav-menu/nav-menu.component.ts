import {Component, OnInit, ElementRef} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.css']
})
export class NavMenuComponent implements OnInit {
  subMenuItems: Array<Object>;
  subMenu: boolean;

  constructor(private router: Router, private el: ElementRef) {
    this.subMenuItems = [
      {
        name: 'Item',
        showArrow: true,
        section: {
          name: 'Item',
          show: false,
          class: 'item-menu section',
          items: [
            {
              name: 'Weapons',
              showArrow: true,
              section: {
                name: 'Item',
                show: false,
                class: 'weapons-menu section',
                items: [
                  {
                    name: '1H Weapon',
                    showArrow: true,
                    section: {
                      name: '1H Weapon',
                      show: false,
                      class: 'one-hand-weapons-menu section',
                      items: [
                        {
                          name: 'Dagger',
                          showArrow: false,
                        },
                        {
                          name: 'Sword',
                          showArrow: false,
                        },
                        {
                          name: 'Katana',
                          showArrow: false,
                        },
                        {
                          name: 'Axe',
                          showArrow: false,
                        },
                        {
                          name: 'Club',
                          showArrow: false,
                        },
                        {
                          name: 'Scepter',
                          showArrow: false,
                        },
                        {
                          name: 'Shortspear',
                          showArrow: false,
                        }
                      ]
                    }
                  },
                  {
                    name: '2H Weapon',
                    showArrow: true,
                    section: {
                      name: '2H Weapon',
                      show: false,
                      class: 'two-hand-weapons-menu section',
                      items: [
                        {
                          name: 'Greatsword',
                          showArrow: false,
                        },
                        {
                          name: 'Nodachi',
                          showArrow: false,
                        },
                        {
                          name: 'Greataxe',
                          showArrow: false,
                        },
                        {
                          name: 'Greatclub',
                          showArrow: false,
                        },
                        {
                          name: 'Staff',
                          showArrow: false,
                        },
                        {
                          name: 'Longspear',
                          showArrow: false,
                        }
                      ]
                    }
                  },
                  {
                    name: 'Instruments',
                    showArrow: true,
                    section: {
                      name: 'Instruments',
                      show: false,
                      class: 'instruments-menu section',
                      items: [
                        {
                          name: 'Lute',
                          showArrow: false,
                        },
                        {
                          name: 'Flute',
                          showArrow: false,
                        },
                        {
                          name: 'Drum',
                          showArrow: false,
                        }
                      ]
                    }
                  },
                  {
                    name: 'Bow',
                    showArrow: false,
                  }
                ]
              }
            },
            {
              name: 'Armor',
              showArrow: true,
              section: {
                name: 'Item',
                show: false,
                class: 'armor-menu section',
                items: [
                  {
                    name: 'Cloth Armor',
                    showArrow: true,
                    section: {
                      name: 'Item',
                      show: false,
                      class: 'cloth-armor-menu section',
                      items: [
                        {
                          name: 'Head',
                          showArrow: false,
                        },
                        {
                          name: 'Chest',
                          showArrow: false,
                        },
                        {
                          name: 'Waist',
                          showArrow: false,
                        },
                        {
                          name: 'Wrists',
                          showArrow: false
                        },
                        {
                          name: 'Hands',
                          showArrow: false
                        },
                        {
                          name: 'Legs',
                          showArrow: false
                        },
                        {
                          name: 'Feet',
                          showArrow: false
                        }
                      ]
                    }
                  },
                  {
                    name: 'Leather Armor',
                    showArrow: true,
                    section: {
                      name: 'Item',
                      show: false,
                      class: 'leather-armor-menu section',
                      items: [
                        {
                          name: 'Head',
                          showArrow: false,
                        },
                        {
                          name: 'Chest',
                          showArrow: false,
                        },
                        {
                          name: 'Waist',
                          showArrow: false,
                        },
                        {
                          name: 'Wrists',
                          showArrow: false
                        },
                        {
                          name: 'Hands',
                          showArrow: false
                        },
                        {
                          name: 'Legs',
                          showArrow: false
                        },
                        {
                          name: 'Feet',
                          showArrow: false
                        }
                      ]
                    }
                  },
                  {
                    name: 'Plate Armor',
                    showArrow: true,
                    section: {
                      name: 'Item',
                      show: false,
                      class: 'plate-armor-menu section',
                      items: [
                        {
                          name: 'Head',
                          showArrow: false,
                        },
                        {
                          name: 'Chest',
                          showArrow: false,
                        },
                        {
                          name: 'Waist',
                          showArrow: false,
                        },
                        {
                          name: 'Wrists',
                          showArrow: false
                        },
                        {
                          name: 'Hands',
                          showArrow: false
                        },
                        {
                          name: 'Legs',
                          showArrow: false
                        },
                        {
                          name: 'Feet',
                          showArrow: false
                        }
                      ]
                    }
                  },
                  {
                    name: 'Cloak',
                    showArrow: false
                  },
                  {
                    name: 'Shield',
                    showArrow: false
                  }
                ]
              }
            },
            {
              name: 'Accessories',
              showArrow: true,
              section: {
                name: 'Accessories',
                show: false,
                class: 'accessory-menu section',
                items: [
                  {
                    name: 'Earrings',
                    showArrow: false
                  },
                  {
                    name: 'Necklace',
                    showArrow: false
                  },
                  {
                    name: 'Ring',
                    showArrow: false
                  }
                ]
              }
            },
            {
              name: 'Costume',
              showArrow: false,
              section: {
                name: 'Costume',
                show: false,
                class: '',
                items: []
              }
            },
            {
              name: 'Item Sets',
              section: {
                name: 'Item Sets',
                show: false,
                class: '',
                items: []
              }
            },
            {
              name: 'Consumables',
              showArrow: true,
              section: {
                name: 'Consumables',
                show: false,
                class: 'consumables-menu section',
                items: [
                  {
                    name: 'Consumables',
                    showArrow: false
                  },
                  {
                    name: 'Food',
                    showArrow: false
                  },
                  {
                    name: 'Drink',
                    showArrow: false
                  },
                  {
                    name: 'Materials',
                    showArrow: false
                  },
                  {
                    name: 'Siege Gear',
                    showArrow: false
                  },
                  {
                    name: 'Explosive',
                    showArrow: false
                  },
                  {
                    name: 'Lunastone',
                    showArrow: false
                  },
                  {
                    name: 'Lunegem',
                    showArrow: false
                  },
                  {
                    name: 'Buildings',
                    showArrow: false
                  },
                  {
                    name: 'Talisman',
                    showArrow: false
                  }
                ]
              }
            },
            {
              name: 'Materials',
              showArrow: true,
              section: {
                name: 'Materials',
                show: false,
                class: 'materials-menu section',
                items: [
                  {
                    name: 'Pigment/Oil/Polish',
                    showArrow: false
                  },
                  {
                    name: 'Regal Ore',
                    showArrow: true,
                    section: {
                      name: 'Regal Ore',
                      show: false,
                      class: 'regal-ore-menu section',
                      items: [
                        {
                          name: 'Ore',
                          showArrow: false
                        },
                        {
                          name: 'Hardwood',
                          showArrow: false
                        },
                        {
                          name: 'Stone Brick',
                          showArrow: false
                        },
                        {
                          name: 'Pelt',
                          showArrow: false
                        },
                        {
                          name: 'Textile',
                          showArrow: false
                        },
                        {
                          name: 'Part',
                          showArrow: false
                        },
                        {
                          name: 'Meat',
                          showArrow: false
                        },
                        {
                          name: 'Seafood',
                          showArrow: false
                        },
                        {
                          name: 'Grain',
                          showArrow: false
                        },
                        {
                          name: 'Vegetable',
                          showArrow: false
                        },
                        {
                          name: 'Fruit',
                          showArrow: false
                        },
                        {
                          name: 'Spice',
                          showArrow: false
                        },
                        {
                          name: 'Herb',
                          showArrow: false
                        },
                        {
                          name: 'Flower',
                          showArrow: false
                        },
                        {
                          name: 'Soil',
                          showArrow: false
                        },
                        {
                          name: 'Gems',
                          showArrow: false
                        }
                      ]
                    }
                  },
                  {
                    name: 'Materials',
                    showArrow: true,
                    section: {
                      name: 'Materials',
                      show: false,
                      class: 'materials-materials-menu section',
                      items: [
                        {
                          name: 'Paper',
                          showArrow: false
                        },
                        {
                          name: 'Metal',
                          showArrow: false
                        },
                        {
                          name: 'Lumber',
                          showArrow: false
                        },
                        {
                          name: 'Stone Brick',
                          showArrow: false
                        },
                        {
                          name: 'Hide',
                          showArrow: false
                        },
                        {
                          name: 'Fabric',
                          showArrow: false
                        },
                        {
                          name: 'Machining',
                          showArrow: false
                        },
                        {
                          name: 'Glass',
                          showArrow: false
                        },
                        {
                          name: 'Rubber',
                          showArrow: false
                        },
                        {
                          name: 'Precious Metal',
                          showArrow: false
                        },
                        {
                          name: 'Alchemy',
                          showArrow: false
                        },
                        {
                          name: 'Crafting',
                          showArrow: false
                        },
                        {
                          name: 'Specialty Pigments',
                          showArrow: false
                        },
                        {
                          name: 'Cooking Oil',
                          showArrow: false
                        },
                        {
                          name: 'Spices',
                          showArrow: false
                        }
                      ]
                    }
                  }
                  ,
                  {
                    name: 'Animals',
                    showArrow: false
                  },
                  {
                    name: 'Plants',
                    showArrow: true,
                    section: {
                      name: 'Plants',
                      show: false,
                      class: 'plants-menu section',
                      items: [
                        {
                          name: 'Saplings',
                          showArrow: false
                        },
                        {
                          name: 'Seed',
                          showArrow: false
                        },
                      ]
                    }
                  },
                  {
                    name: 'Indoor Decor',
                    showArrow: true,
                    section: {
                      name: 'Indoor Decor',
                      show: false,
                      class: 'indoor-decor-menu section',
                      items: [
                        {
                          name: 'Furniture',
                          showArrow: false
                        }
                      ]
                    }
                  },
                  {
                    name: 'Books',
                    showArrow: false
                  }
                ]
              }
            },
            {
              name: 'Machining',
              showArrow: true,
              section: {
                name: 'Machining',
                show: false,
                class: 'machining-menu section',
                items: [
                  {
                    name: 'Transportation',
                    showArrow: false
                  },
                  {
                    name: 'Ships',
                    showArrow: false
                  },
                  {
                    name: 'Gilders',
                    showArrow: false
                  },
                  {
                    name: 'Siege Gear',
                    showArrow: false
                  }
                ]
              }
            },
            {
              name: 'Battle Pets',
              showArrow: true,
              section: {
                name: 'Battle Pets',
                show: false,
                class: 'battle-pets-menu section',
                items: [
                  {
                    name: 'Battle Pets',
                    showArrow: false
                  },
                  {
                    name: 'Pet Gear',
                    showArrow: false
                  }
                ]
              }
            },
            {
              name: 'Toy',
              showArrow: true,
              section: {
                name: 'Toy',
                show: false,
                class: 'toy-menu section',
                items: [
                  {
                    name: 'Crafting',
                    showArrow: true,
                    section: {
                      name: 'Crafting',
                      show: false,
                      class: 'toy-crafting-adventure-menu section',
                      items: [
                        {
                          name: 'Adventure',
                          showArrow: false
                        }
                      ]
                    }
                  },
                  {
                    name: 'Coins',
                    showArrow: false
                  }
                ]
              }
            }
          ]
        }
      },
      {
        name: 'Quest',
        showArrow: true,
        section: {
          name: 'Quest',
          show: false,
          class: 'quest-menu section',
          items: [
            {
              name: 'Nuia',
              showArrow: true,
              section: {
                name: '',
                show: false,
                class: 'nuia-menu section',
                items: [
                  {
                    name: 'Ahnimar',
                    showArrow: false
                  },
                  {
                    name: 'Airain Rock',
                    showArrow: false
                  },
                  {
                    name: 'Cinderstone Moor',
                    showArrow: false
                  },
                  {
                    name: 'Dewstone Plains',
                    showArrow: false
                  },
                  {
                    name: 'Gwenonid Forest',
                    showArrow: false
                  },
                  {
                    name: 'Halcyona',
                    showArrow: false
                  },
                  {
                    name: 'Hellswamp',
                    showArrow: false
                  },
                  {
                    name: 'Karkasse Ridgelands',
                    showArrow: false
                  },
                  {
                    name: 'Lilut Hills',
                    showArrow: false
                  },
                  {
                    name: 'Marianople',
                    showArrow: false
                  },
                  {
                    name: 'Sanddeep',
                    showArrow: false
                  },
                  {
                    name: 'Solzreed Peninsula',
                    showArrow: false
                  },
                  {
                    name: 'Two Crowns',
                    showArrow: false
                  },
                  {
                    name: 'White Arden',
                    showArrow: false
                  },
                ]
              }
            },
            {
              name: 'Haranya',
              showArrow: true,
              section: {
                name: 'Haranya',
                show: false,
                class: 'haranya-menu section',
                items: [
                  {
                    name: 'Arcum Iris',
                    showArrow: false
                  },
                  {
                    name: 'Falcorth Plains',
                    showArrow: false
                  },
                  {
                    name: 'Hasla',
                    showArrow: false
                  },
                  {
                    name: 'Mahadevi',
                    showArrow: false
                  },
                  {
                    name: 'Perinoor Ruins',
                    showArrow: false
                  },
                  {
                    name: 'Rokhala Mountains',
                    showArrow: false
                  },
                  {
                    name: 'Rookborne Basin',
                    showArrow: false
                  },
                  {
                    name: 'Silent Forest',
                    showArrow: false
                  },
                  {
                    name: 'Solis Headlands',
                    showArrow: false
                  },
                  {
                    name: 'Sunbite Wilds',
                    showArrow: false
                  },
                  {
                    name: 'Tigerspine Mountains',
                    showArrow: false
                  },
                  {
                    name: 'Villanelle',
                    showArrow: false
                  },
                  {
                    name: 'Windscour Savannah',
                    showArrow: false
                  },
                  {
                    name: 'Ynystere',
                    showArrow: false
                  }
                ]
              }
            },
            {
              name: 'Auroria Continent',
              showArrow: true,
              section: {
                name: 'Auroria Continent',
                show: false,
                class: 'auroria-menu section',
                items: [
                  {
                    name: 'Calmlands',
                    showArrow: false
                  },
                  {
                    name: 'Diamond Shores',
                    showArrow: false
                  },
                  {
                    name: 'Exeloch',
                    showArrow: false
                  },
                  {
                    name: 'Golden Ruins',
                    showArrow: false
                  },
                  {
                    name: 'Heedmar',
                    showArrow: false
                  },
                  {
                    name: 'Marcala',
                    showArrow: false
                  },
                  {
                    name: 'Mistmerrow',
                    showArrow: false
                  },
                  {
                    name: 'Nuimari',
                    showArrow: false
                  },
                  {
                    name: 'Sungold Fields',
                    showArrow: false
                  }
                ]
              }
            },
            {
              name: 'Sea',
              showArrow: true,
              section: {
                name: 'Sea',
                show: false,
                class: 'sea-menu section',
                items: [
                  {
                    name: 'Arcadian Sea',
                    showArrow: false
                  },
                  {
                    name: 'Castaway Strait',
                    showArrow: false
                  },
                  {
                    name: 'Feuille Sound',
                    showArrow: false
                  },
                  {
                    name: 'Halcyona',
                    showArrow: false
                  },
                  {
                    name: 'Saltswept Atoll',
                    showArrow: false
                  },
                  {
                    name: 'Shattered Sea',
                    showArrow: false
                  },
                  {
                    name: 'Stormraw Sound',
                    showArrow: false
                  },
                  {
                    name: 'Sunspeck Sea',
                    showArrow: false
                  }
                ]
              }
            },

            {
              name: 'Dungeon',
              showArrow: true,
              section: {
                name: 'Dungeon',
                show: false,
                class: 'dungeon-menu section',
                items: [
                  {
                    name: 'Burnt Castle Armory',
                    showArrow: false
                  },
                  {
                    name: 'Greater Burnt Castle Armory',
                    showArrow: false
                  },
                  {
                    name: 'Greater Hadir Farm',
                    showArrow: false
                  },
                  {
                    name: 'Greater Howling Abyss',
                    showArrow: false
                  },
                  {
                    name: 'Greater Koloal Cradle',
                    showArrow: false
                  },
                  {
                    name: 'Greater Palace Cellar',
                    showArrow: false
                  },
                  {
                    name: 'Greater Sharpwind Mines',
                    showArrow: false
                  },
                  {
                    name: 'Hadir Farm',
                    showArrow: false
                  },
                  {
                    name: 'Howling Abyss',
                    showArrow: false
                  },
                  {
                    name: 'Kroloal Cradle',
                    showArrow: false
                  },
                  {
                    name: 'Palace Cellar',
                    showArrow: false
                  },
                  {
                    name: 'Sea of Drowned Love',
                    showArrow: false
                  },
                  {
                    name: 'Serpentis',
                    showArrow: false
                  },
                  {
                    name: 'Sharpwind Mines',
                    showArrow: false
                  }
                ]
              }
            },
            {
              name: 'Main Story',
              showArrow: true,
              section: {
                name: 'Main Story',
                show: false,
                class: 'main-story-menu section',
                items: [
                  {
                    name: 'Nuian',
                    showArrow: false
                  },
                  {
                    name: 'Firran',
                    showArrow: false
                  },
                  {
                    name: 'Elf',
                    showArrow: false
                  },
                  {
                    name: 'Harani',
                    showArrow: false
                  },
                  {
                    name: 'Dwarf',
                    showArrow: false
                  },
                  {
                    name: 'Warborn',
                    showArrow: false
                  }
                ]
              }
            },
            {
              name: 'Mirage Isle',
              showArrow: false
            },
            {
              name: 'Blue Salt Brotherhood',
              showArrow: false
            },
            {
              name: 'Honor Points',
              showArrow: false
            },
            {
              name: 'Crime Points',
              showArrow: false
            },
            {
              name: 'Jury',
              showArrow: false
            },
            {
              name: 'Title',
              showArrow: false
            }
          ]
        }
      },
      {
        name: 'Achievements',
        showArrow: true,
        section: {
          name: 'Achievements',
          show: false,
          class: 'achievements-menu section',
          items: [
            {
              name: 'Level-Based',
              showArrow: true,
              section: {
                name: 'Level-Based',
                show: false,
                class: 'level-based-menu section',
                items: [
                  {
                    name: 'Level 1-5',
                    showArrow: false
                  },
                  {
                    name: 'Level 6-10',
                    showArrow: false
                  },
                  {
                    name: 'Level 11-15',
                    showArrow: false
                  },
                  {
                    name: 'Level 16-20',
                    showArrow: false
                  },
                  {
                    name: 'Level 21-25',
                    showArrow: false
                  },
                  {
                    name: 'Level 26-30',
                    showArrow: false
                  },
                  {
                    name: 'Level 31-35',
                    showArrow: false
                  },
                  {
                    name: 'Level 36-40',
                    showArrow: false
                  },
                  {
                    name: 'Level 41-45',
                    showArrow: false
                  },
                  {
                    name: 'Level 46-50',
                    showArrow: false
                  },
                  {
                    name: 'Level 51-55',
                    showArrow: false
                  }
                ]
              }
            },
            {
              name: 'General',
              showArrow: true,
              section: {
                name: 'General',
                show: false,
                class: 'general-menu section',
                items: [
                  {
                    name: 'Character',
                    showArrow: false
                  },
                  {
                    name: 'Pet',
                    showArrow: false
                  },
                  {
                    name: 'Collection',
                    showArrow: false
                  },
                  {
                    name: 'Misc.',
                    showArrow: false
                  }
                ]
              }
            },
            {
              name: 'Combat',
              showArrow: true,
              section: {
                name: 'Combat',
                show: false,
                class: 'combat-menu section',
                items: [
                  {
                    name: 'Combat / PvP',
                    showArrow: false
                  },
                  {
                    name: 'Siege',
                    showArrow: false
                  },
                  {
                    name: 'PvP Items',
                    showArrow: false
                  }
                ]
              }
            },
            {
              name: 'Vocation',
              showArrow: true,
              section: {
                name: 'Vocation',
                show: false,
                class: 'vocation-menu section',
                items: [
                  {
                    name: 'Crafting',
                    showArrow: false
                  },
                  {
                    name: 'Harvesting',
                    showArrow: false
                  },
                  {
                    name: 'Trade',
                    showArrow: false
                  },
                  {
                    name: 'Decor',
                    showArrow: false
                  },
                  {
                    name: 'Badges/Proficiency',
                    showArrow: false
                  }
                ]
              }
            },
            {
              name: 'Adventure',
              showArrow: true,
              section: {
                name: 'Adventure',
                show: false,
                class: 'adventure-menu section',
                items: [
                  {
                    name: 'Quests/Completed',
                    showArrow: false
                  },
                  {
                    name: 'Rifts/Attacks',
                    showArrow: false
                  },
                  {
                    name: 'Collection',
                    showArrow: false
                  }
                ]
              }
            },
            {
              name: 'Social',
              showArrow: true,
              section: {
                name: 'Social',
                show: false,
                class: 'social-menu section',
                items: [
                  {
                    name: 'Criminal Justice',
                    showArrow: false
                  },
                  {
                    name: 'Groups',
                    showArrow: false
                  }
                ]
              }
            }
          ]
        }
      },
      {
        name: 'NPC',
        showArrow: true,
        section: {
          name: 'NPC',
          show: false,
          class: 'npc-menu section',
          items: [
            {
              name: 'By Grade',
              showArrow: true,
              section: {
                name: 'By Grade',
                show: false,
                class: 'by-grade-menu section',
                items: [
                  {
                    name: 'Normal',
                    show: false,
                  },
                  {
                    name: 'Strong',
                    show: false,
                  },
                  {
                    name: 'Elite',
                    show: false,
                  },
                  {
                    name: 'Mythic',
                    show: false,
                  },
                  {
                    name: 'Legendary',
                    show: false,
                  },
                  {
                    name: 'Epic',
                    show: false,
                  }
                ]
              }
            },
            {
              name: 'By Zone',
              showArrow: true,
              section: {
                name: 'By Zone',
                show: false,
                class: 'by-zone-menu section',
                items: [
                  {
                    name: 'Nuia',
                    showArrow: true,
                    section: {
                      name: '',
                      show: false,
                      class: 'nuia-menu section',
                      items: [
                        {
                          name: 'Ahnimar',
                          showArrow: false
                        },
                        {
                          name: 'Airain Rock',
                          showArrow: false
                        },
                        {
                          name: 'Cinderstone Moor',
                          showArrow: false
                        },
                        {
                          name: 'Dewstone Plains',
                          showArrow: false
                        },
                        {
                          name: 'Gwenonid Forest',
                          showArrow: false
                        },
                        {
                          name: 'Halcyona',
                          showArrow: false
                        },
                        {
                          name: 'Hellswamp',
                          showArrow: false
                        },
                        {
                          name: 'Karkasse Ridgelands',
                          showArrow: false
                        },
                        {
                          name: 'Lilut Hills',
                          showArrow: false
                        },
                        {
                          name: 'Marianople',
                          showArrow: false
                        },
                        {
                          name: 'Sanddeep',
                          showArrow: false
                        },
                        {
                          name: 'Solzreed Peninsula',
                          showArrow: false
                        },
                        {
                          name: 'Two Crowns',
                          showArrow: false
                        },
                        {
                          name: 'White Arden',
                          showArrow: false
                        },
                      ]
                    }
                  },
                  {
                    name: 'Haranya',
                    showArrow: true,
                    section: {
                      name: 'Haranya',
                      show: false,
                      class: 'haranya-menu section',
                      items: [
                        {
                          name: 'Arcum Iris',
                          showArrow: false
                        },
                        {
                          name: 'Falcorth Plains',
                          showArrow: false
                        },
                        {
                          name: 'Hasla',
                          showArrow: false
                        },
                        {
                          name: 'Mahadevi',
                          showArrow: false
                        },
                        {
                          name: 'Perinoor Ruins',
                          showArrow: false
                        },
                        {
                          name: 'Rokhala Mountains',
                          showArrow: false
                        },
                        {
                          name: 'Rookborne Basin',
                          showArrow: false
                        },
                        {
                          name: 'Silent Forest',
                          showArrow: false
                        },
                        {
                          name: 'Solis Headlands',
                          showArrow: false
                        },
                        {
                          name: 'Sunbite Wilds',
                          showArrow: false
                        },
                        {
                          name: 'Tigerspine Mountains',
                          showArrow: false
                        },
                        {
                          name: 'Villanelle',
                          showArrow: false
                        },
                        {
                          name: 'Windscour Savannah',
                          showArrow: false
                        },
                        {
                          name: 'Ynystere',
                          showArrow: false
                        }
                      ]
                    }
                  },
                  {
                    name: 'Auroria Continent',
                    showArrow: true,
                    section: {
                      name: 'Auroria Continent',
                      show: false,
                      class: 'auroria-menu section',
                      items: [
                        {
                          name: 'Calmlands',
                          showArrow: false
                        },
                        {
                          name: 'Diamond Shores',
                          showArrow: false
                        },
                        {
                          name: 'Exeloch',
                          showArrow: false
                        },
                        {
                          name: 'Golden Ruins',
                          showArrow: false
                        },
                        {
                          name: 'Heedmar',
                          showArrow: false
                        },
                        {
                          name: 'Marcala',
                          showArrow: false
                        },
                        {
                          name: 'Mistmerrow',
                          showArrow: false
                        },
                        {
                          name: 'Nuimari',
                          showArrow: false
                        },
                        {
                          name: 'Sungold Fields',
                          showArrow: false
                        }
                      ]
                    }
                  },
                  {
                    name: 'Sea',
                    showArrow: true,
                    section: {
                      name: 'Sea',
                      show: false,
                      class: 'sea-menu section',
                      items: [
                        {
                          name: 'Arcadian Sea',
                          showArrow: false
                        },
                        {
                          name: 'Castaway Strait',
                          showArrow: false
                        },
                        {
                          name: 'Feuille Sound',
                          showArrow: false
                        },
                        {
                          name: 'Halcyona',
                          showArrow: false
                        },
                        {
                          name: 'Saltswept Atoll',
                          showArrow: false
                        },
                        {
                          name: 'Shattered Sea',
                          showArrow: false
                        },
                        {
                          name: 'Stormraw Sound',
                          showArrow: false
                        },
                        {
                          name: 'Sunspeck Sea',
                          showArrow: false
                        }
                      ]
                    }
                  }
                ]
              }
            },
            {
              name: 'Battle Pets',
              showArrow: false
            },
            {
              name: 'Mounts',
              showArrow: false
            }
          ]
        }
      },
      {
        name: 'Design',
        showArrow: true,
        section: {
          name: 'Design',
          show: false,
          class: 'design-menu section',
          items: [
            {
              name: 'Weaponry',
              showArrow: false
            },
            {
              name: 'Carpentry',
              showArrow: false
            },
            {
              name: 'Tailoring',
              showArrow: false
            },
            {
              name: 'Leatherwork',
              showArrow: false
            },
            {
              name: 'Metalwork',
              showArrow: false
            },
            {
              name: 'Handicrafts',
              showArrow: false
            },
            {
              name: 'Alchemy',
              showArrow: false
            },
            {
              name: 'Cooking',
              showArrow: false
            },
            {
              name: 'Machining',
              showArrow: false
            },
            {
              name: 'Husbandry',
              showArrow: false
            },
            {
              name: 'Gathering',
              showArrow: false
            },
            {
              name: 'Farming',
              showArrow: false
            },
            {
              name: 'Masonry',
              showArrow: false
            },
            {
              name: 'Printing',
              showArrow: false
            },
            {
              name: 'Commerce',
              showArrow: false
            },
            {
              name: 'Construction',
              showArrow: false
            },
            {
              name: 'Logging',
              showArrow: false
            },
            {
              name: 'Artistry',
              showArrow: false
            },
            {
              name: 'Exploration',
              showArrow: false
            },
            {
              name: 'Zones',
              showArrow: false
            },
            {
              name: 'Dungeons',
              showArrow: false
            },
            {
              name: 'Pet Gear',
              showArrow: false
            }
          ]
        }
      },
      {
        name: 'Skills',
        showArrow: true,
        section: {
          name: 'Skills',
          show: false,
          class: 'skills-menu section',
          items: [
            {
              name: 'Battlerage',
              showArrow: false
            },
            {
              name: 'Witchcraft',
              showArrow: false
            },
            {
              name: 'Defense',
              showArrow: false
            },
            {
              name: 'Auramancy',
              showArrow: false
            },
            {
              name: 'Occultism',
              showArrow: false
            },
            {
              name: 'Archery',
              showArrow: false
            },
            {
              name: 'Sorcery',
              showArrow: false
            },
            {
              name: 'Shadowplay',
              showArrow: false
            },
            {
              name: 'Songcraft',
              showArrow: false
            },
            {
              name: 'Vitalism',
              showArrow: false
            }
          ]
        }
      },
      {
        name: 'Title',
        showArrow: false,
        section: {
          name: 'Skills',
          show: false,
          class: 'title-menu section',
          items: []
        }
      }
    ];
  }

  ngOnInit() {
  }

  gotoHome() {
    this.router.navigate(['']);
  }

  gotoSkillCalculatorPage() {
    this.router.navigate(['skill-calculator']);
  }

  gotoGearCalculatorPage() {
    this.router.navigate(['gear-calculator']);
  }

  gotoDatabase() {
    this.router.navigate(['item']);
  }
  mouseOver(item: Object) {
    if ('section' in item) {
      item['section'].show = true;
    }
  }

  showSubMenu() {
    this.subMenu = true;
  }

  updateDatabase(item1: any, item2: any, item3: any, item4: any) {
    console.log(item1);
    if (item1 === 'Item') {
      if (item4 !== undefined) {
        this.router.navigate(['item', item2.toLowerCase().replace(/ /g,"_"), item3.toLowerCase().replace(/ /g,"_"), item4.toLowerCase().replace(/ /g,"_")]);
      }
      else if (item3 !== undefined) {
        this.router.navigate(['item', item2.toLowerCase().replace(/ /g,"_"), item3.toLowerCase().replace(/ /g,"_")]);
      }
      else if (item2 !== undefined) {
        this.router.navigate(['item', item2.toLowerCase().replace(/ /g,"_")]);
      }
      else {
        this.router.navigate(['item']);
      }
    }
    else if (item1 === 'Quest') {
      if (item4 !== undefined) {
        this.router.navigate(['quest', item2.toLowerCase().replace(/ /g,"_"), item3.toLowerCase().replace(/ /g,"_"), item4.toLowerCase().replace(/ /g,"_")]);
      }
      else if (item3 !== undefined) {
        this.router.navigate(['quest', item2.toLowerCase().replace(/ /g,"_"), item3.toLowerCase().replace(/ /g,"_")]);
      }
      else if (item2 !== undefined) {
        this.router.navigate(['quest', item2.toLowerCase().replace(/ /g,"_")]);
      }
      else {
        this.router.navigate(['quest']);
      }
    }
    else if (item1 === 'Achievements') {
      if (item4 !== undefined) {
        this.router.navigate(['achievements', item2.toLowerCase().replace(/ /g,"_"), item3.toLowerCase().replace(/ /g,"_"), item4.toLowerCase().replace(/ /g,"_")]);
      }
      else if (item3 !== undefined) {
        this.router.navigate(['achievements', item2.toLowerCase().replace(/ /g,"_"), item3.toLowerCase().replace(/ /g,"_")]);
      }
      else if (item2 !== undefined) {
        this.router.navigate(['achievements', item2.toLowerCase().replace(/ /g,"_")]);
      }
      else {
        this.router.navigate(['achievements']);
      }
    }
    else if (item1 === 'NPC') {
      if (item4 !== undefined) {
        this.router.navigate(['npcs', item2.toLowerCase().replace(/ /g,"_"), item3.toLowerCase().replace(/ /g,"_"), item4.toLowerCase().replace(/ /g,"_")]);
      }
      else if (item3 !== undefined) {
        this.router.navigate(['npcs', item2.toLowerCase().replace(/ /g,"_"), item3.toLowerCase().replace(/ /g,"_")]);
      }
      else if (item2 !== undefined) {
        this.router.navigate(['npcs', item2.toLowerCase().replace(/ /g,"_")]);
      }
      else {
        this.router.navigate(['npcs']);
      }
    }
    else if (item1 === 'Design') {
      if (item2 !== undefined) {
        this.router.navigate(['recipe', item2.toLowerCase().replace(/ /g,"_")]);
      }
      else {
        this.router.navigate(['recipe']);
      }
    }
    else if (item1 === 'Skills') {
      if (item2 !== undefined) {
        this.router.navigate(['skills', item2.toLowerCase().replace(/ /g,"_")]);
      }
      else {
        this.router.navigate(['skills']);
      }
    }
    else if (item1 === 'Title') {
      this.router.navigate(['titles']);
    }
  }

  mouseLeave(item: Object) {
    if ('section' in item) {
      item['section'].show = false;
    }
    var isHovered = $('.database-sub-menu').is(":hover");
    if (isHovered === false) {
      for (let i = 0; i < this.subMenuItems.length; i++) {
        if ('section' in this.subMenuItems[i]) {
          if (this.subMenuItems[i]['section'].show === true) {
            for (let j = 0; j < this.subMenuItems[i]['section'].items.length; j++) {
              if ('section' in this.subMenuItems[i]['section'].items[j]) {
                if (this.subMenuItems[i]['section'].items[j].show === true) {
                  for (let k = 0; k < this.subMenuItems[i]['section'].items[j]['section'].items.length; j++) {
                    if ('section' in this.subMenuItems[i]['section'].items[j]['section'].items[k]) {
                      if (this.subMenuItems[i]['section'].items[j]['section'].items[k]['section'].show === true) {
                        for (let l = 0; l < this.subMenuItems[i]['section'].items[j]['section'].items[k]['section'].items.length; l++) {
                          if ('section' in this.subMenuItems[i]['section'].items[j]['section'].items[k]['section'].items[l]) {
                            if (this.subMenuItems[i]['section'].items[j]['section'].items[k]['section'].items[l]['section'].show === true) {
                              this.subMenuItems[i]['section'].items[j]['section'].items[k]['section'].items[l]['section'].show = false;
                            }
                          }
                        }
                      }
                      this.subMenuItems[i]['section'].items[j]['section'].items[k]['section'].show = false;
                    }
                  }
                  this.subMenuItems[i]['section'].items[j]['section'].show = false;
                }
              }
            }
            this.subMenuItems[i]['section'].show = false;
          }
        }
      }
      this.subMenu = false;
    }
  }
}
