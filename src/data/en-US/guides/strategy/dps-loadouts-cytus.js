export const guide = {
    shieldBreak: {
        description: "Deal the highest damage to shields. Necessary as most bosses and minibosses have shields that significantly reduce damage taken. Bosses will also use powerful attacks if their shield is not broken in time. These weapons tend to unlock a crucial shield break effect at 1★ or 3★. ",
        weapons: {
            wep1: {
                name: "Baiyuekui",
                pros: [
                    "Insanely high damage with skills and dash attacks, instant burst on shieldbreak (3★)",
                    "i-frames on active skill",
                    "Can be paired with 2 support weapons"
                ],
                cons: []
            },
            wep2: {
                name: "Ruby",
                pros: [
                    "Very high damage numbers, can be used as Main DPS",
                    "Detonates burn effects, synergize with fire weapons",
                    "Can permastun elite mobs and be effective at long range"
                ],
                cons: [
                    "Not as efficient as other shieldbreakers til 5★"
                ]
            },
            wep3: {
                name: "KING",
                pros: [
                    "High DoT on shieldbreak",
                    "Area burst with skills"
                ],
                cons: [
                    "Easily interrupted when casting and basic attacking"
                ]
            },
            wep4: {
                name: "Meryl",
                pros: [
                    "Highest shieldbreak efficiency, self-heal on shieldbreak (1★)",
                    "Immune to interrupts"
                ],
                cons: [
                    "No shieldbreak damage effect",
                    "Clunky switch skill"
                ]
            },
            wep5: {
                name: "Shiro",
                pros: [
                    "High burst with active skill + 3 dash attacks",
                    "3★ resets CDs on shieldbreak, benefits other weapons"
                ],
                cons: [
                    "Skill has small range, useless if enemies are mobile",
                    "Switch skill is terrible"
                ]
            },
            wep6: {
                name: "Huma",
                pros: [
                    "Decent shieldbreaking efficiency",
                    "Relatively high energy charge"
                ],
                cons: [
                    "No shieldbreak effect"
                ]
            }
        }
    },
    mainDPS: {
        description: "Highest standing DPS to unshielded targets; the weapon you want to be on most of the time. These weapons tend to have low damage to shields and average charge rate.",
        weapons: {
            wep1: {
                name: "Cobalt-B",
                pros: [
                    "Applies multiple high damage burn effects",
                    "Very high damage active skill"
                ],
                cons: [
                    "Reliant on 2 set Cobalt chips to apply 3rd burn",
                    "Reliant on 6★ to reduce skill cooldown"
                ]
            },
            wep2: {
                name: "Samir",
                pros: [
                    "Fast hits, good DPS and charge rate",
                    "Safe AoE air attack"
                ],
                cons: [
                    "Final hit of ground basic attack is terrible",
                    "Bad long range attack, ineffective anti-air"
                ]
            },
            wep3: {
                name: "Crow",
                pros: [
                    "Backstabs, execute, built-in crit buffs",
                    "Air attack has very high DPS potential"
                ],
                cons: [
                    "Very difficult to use, requires 2pc Claudia chips",
                    "Weak at low ★s"
                ]
            },
            wep4: {
                name: "Frigg",
                pros: [
                    "Ice field allows free dash attacks and buffs other ice weapons",
                    "Large AOE attacks",
                    "i-frames on active skill"
                ],
                cons: [
                    "Slow attacks, reliant on staying in ice field"
                ]
            },
            wep5: {
                name: "Tsubasa",
                pros: [
                    "High charge rate",
                    "Good dash attack and arrow rain damage"
                ],
                cons: [
                    "Basic attacks are weak and blocked by other players"
                ]
            },
            wep6: {
                name: "Ene",
                pros: [
                    "Good DPS for SR",
                    "Provides good CC and CC immunity",
                    "Active skill allows dash attack spam"
                ],
                cons: [
                    "Slow attacks"
                ]
            }
        }
    },
    supportDPS: {
        description: "Increase your overall DPS through damage buffs and other means. These weapons are best used as quickswap weapon, by rotating frequently to throw out their burst and refresh their buffs.",
        weapons: {
            wep1: {
                name: "Marc",
                pros: [
                    "35% all damage buff (3★) & CC immunity buff (6★)",
                    "High charge rate"
                ],
                cons: [
                    "No useful buffs before 3★, takes damage for allies"
                ]
            },
            wep2: {
                name: "Nemesis",
                pros: [
                    "20%/40%(5★)/50%(6★) electric attack buff",
                    "Heals while doing good passive dps (3★+)"
                ],
                cons: [
                    "Only supports electric weapons",
                ]
            },
            wep3: {
                name: "Tsubasa",
                pros: [
                    "Highest charge rate against grouped enemies",
                    "24% (1★)/40% (6★) all damage buff"
                ],
                cons: [
                    "Heavily reliant on dash attacks to apply buff until 6★"
                ]
            },
            wep4: {
                name: "Claudia",
                pros: [
                    "24% all damage buff (1★), 10% (3★)/20% (6★) phys damage increase, 20% skill damage buff (5★)",
                    "High charge rate"
                ],
                cons: [
                    "Vulnerable during skill",
                    "No main physical DPS to support"
                ]
            },
            wep5: {
                name: "Shiro",
                pros: [
                    "1★ greatly increases team burst damage and shieldbreak during active skill",
                    "3★ resets cooldowns on shieldbreak, benefitting other weapons"
                ],
                cons: [
                    "Reliant on active skill"
                ]
            },
            wep6: {
                name: "Bai Ling",
                pros: [
                    "Applies wounded debuff on dash attacks (increase all damage to target by 20%)",
                    "Useful in group raid if you don't have good DPS options yourself"
                ],
                cons: []
            }
        }
    }
}