const config = require("../config.json")

function stateCheck(state){
    if (state) return "✅";
    return "❌";
}

let welcome = {
    "components": [
        {
            "type": 1,
            "components": [
            {
                "style": 1,
                "label": `Opret skriftlig ansøgning`,
                "custom_id": `writtenWhitelist`,
                "disabled": false,
                "emoji": {
                "id": null,
                "name": `📨`
                },
                "type": 2
            },
            {
                "style": 3,
                "label": `Opret tid til mundtlig ansøgning`,
                "custom_id": `stdWhitelist`,
                "disabled": false,
                "emoji": {
                "id": null,
                "name": `💬`
                },
                "type": 2
            }
            ]
        }
        ],
        "embeds": [
        {
            "type": "rich",
            "title": `Velkommen til Empire City`,
            "description": `Når du er klar til at blive whitelistet trykker du på den ønskede ansøgningsform.`,
            "color": 0x680072,
            "fields": [
            {
                "name": `Regler`,
                "value": `Før du kan blive whitelistet skal du læse reglerne. \nDu kan finde reglerne her: <#927164587453861948>`
            },
            {
                "name": `Skriftlig ansøgning`,
                "value": `Ønskes en skriftlig ansøgning skal du blot trykke på den blå knap. Skriftlige ansøgninger kan blive afvist, og der vil påkræves en fysisk samtale. Hvis du bliver afvist vil der automatisk oprettes en ticket med begrundelser, samt videre information omkring mundtlig samtale.`,
                "inline": true
            },
            {
                "name": `Mundtlig ansøgning`,
                "value": `Ønskes en mundtlig ansøgning skal du blot trykke på den grønne knap. Vi kan desværre ikke være tilstede alle tidspunkter af døgnet, derfor opfordres du til at angive tidspunkter, hvor du er tilgængelig. Du vil herefter blive tagget, når vi er klar til at tage din ansøgning. Hvis du ønsker at prøve lykken, blot tilslut <#1009063921157681265>`,
                "inline": true
            }
            ],
            "footer": {
                "text": `\u2757\u2757 Vi annoncerer når vi står klar til at tage imod ikke planlagte mundtlige ansøgninger, så hold øje med serveren. \u2757\u2757` 
            }
        }
        ]
};

let support = {
    "components": [
        {
        "type": 1,
        "components": [
            {
            "style": 3,
            "label": `Opret ticket`,
            "custom_id": `createTicket`,
            "disabled": false,
            "emoji": {
                "id": null,
                "name": `📝`
            },
            "type": 2
            }
        ]
        }
    ],
    "embeds": [
        {
        "type": "rich",
        "title": `Opret ticket`,
        "description": `Tryk på knappen for at oprette en support case.\nEfter du har trykket på knappen skal du udfylde alle felter.`,
        "color": 0x680072
        }
    ]
}

let notify = {
    "components": [
        {
          "type": 1,
          "components": [
            {
              "style": 2,
              "label": `Aktiver/Deaktiver Nyheder `,
              "custom_id": `news`,
              "disabled": false,
              "emoji": {
                "id": null,
                "name": `📢`
              },
              "type": 2
            },
            {
              "style": 2,
              "label": `Aktiver/Deaktiver Stream`,
              "custom_id": `stream`,
              "disabled": false,
              "emoji": {
                "id": 1009438415684649000,
                "name": `:twitch:`
              },
              "type": 2
            }
          ]
        }
      ],
    "embeds": [
        {
          "type": "rich",
          "title": `Notifikations præferencer`,
          "description": `Herunder kan du vælge, hvilke notifikationer du får fra serveren. Det kan være standard nyheder omkring opdatering og serverdrift, samt hvornår en af vores Content Creators går live. Vi vil i relevante tilfælde benytte os af @everyone, hvis beskeden er relevant for alle vores medlemmer`,
          "color": 0x680072,
          "fields": [
            {
              "name": `📢 Nyheder`,
              "value": `Reager med denne emoji for at få de seneste nyheder fra vores server`
            },
            {
              "name": `<:twitch:1009438415684649000> Content Creator går live`,
              "value": `Reager med denne emoji for at få at vide når vores content creators går live`
            }
          ]
        }
      ]
}

let applications = {
  "components": [
    {
      "type": 1,
      "components": [
        {
          "custom_id": `application_type`,
          "placeholder": `📋 Vælg ansøgningstypen du ønsker at udfylde`,
          "options": [
            {//politi
                "label": `Politi`,
                "value": `police_app`,
                "emoji": {
                  "id": null,
                  "name": `👮`
                },
                "default": false
            },
            {//EMS
                "label": `EMS`,
                "value": `ems_app`,
                "emoji": {
                    "id": null,
                    "name": `🚑`
                },
                "default": false
            },
            {//Advokat
                "label": `Statsadvokat`,
                "value": `lawyer_app`,
                "emoji": {
                    "id": null,
                    "name": `💼`
                },
                "default": false
            },
            {//Mekaniker
                "label": `Mekaniker`,
                "value": `mechanic_app`,
                "emoji": {
                  "id": null,
                  "name": `🛠`
                },
                "default": false
            },
            {//Bande
                "label": `Oprettelse af bande`,
                "value": `gang_app`,
                "description": `Opstart af bande kræver mindst 3 spillere. Kun leder sender ansøgning!`,
                "emoji": {
                  "id": null,
                  "name": `🔫`
                },
                "default": false
            },
            {//staff
              "label": `Staff`,
              "value": `staff_app`,
              "description": `Alderskrav 18+`,
              "emoji": {
                "id": null,
                "name": `🛡`
              },
              "default": false
            },
            {//udvikler
              "label": `Udvikler`,
              "value": `dev_app`,
              "description": `Udvalgte erfaringer kræves - Alderskrav 18+`,
              "emoji": {
                "id": null,
                "name": `🖥`
              },
              "default": false
            },
            {//Content
              "label": `Content Creator`,
              "value": `content_app`,
              "emoji": {
                "id": null,
                "name": `🎬`
              },
              "default": false
            },
            {//CK
              "label": `CK af karakter`,
              "value": `ck_app`,
              "emoji": {
                "id": null,
                "name": `🪦`
              },
              "default": false
            },
            {//Refund
                "label": `Refund`,
                "value": `refund_app`,
                "emoji": {
                  "id": null,
                  "name": `🪙`
                },
                "default": false
            }
          ],
          "min_values": 1,
          "max_values": 1,
          "type": 3
        }
      ]
    }
  ],
      "embeds": [
        {
          "type": "rich",
          "title": `Send ansøgning`,
          "description": `Vælg typen af ansøgning du ønsker at sende, ved at trykke på menuen nedenunder.\nHerefter udfylder du din ønskede ansøgning, husk at være idybdegående og seriøs i din ansøgning, ellers vil den blive afvist.\nHusk at tjekke om du opfylder alle krav, før du sender ansøgningen!`,
          "color": 0x680072,
          "fields": [
            {
              "name": `Hvad søger vi lige nu?`,
              "value": `Nuværende tidspunkt søger vi følgende:
              \n${stateCheck(config.acceptedApplications.police)} Politi
              \n${stateCheck(config.acceptedApplications.EMS)} EMS
              \n${stateCheck(config.acceptedApplications.lawyer)} Statsadvokat
              \n${stateCheck(config.acceptedApplications.staff)} Staff
              \n${stateCheck(config.acceptedApplications.dev)} Udvikler`,
              "inline": false
            },
            {
              "name": `Hvad kan du ellers sende ansøgninger om?`,
              "value": `Følgende ansøgninger kan også sendes:\n- Mekaniker\n- Oprettelse af bande\n- Content-creator\n- CK af karakter\n- Refund`,
              "inline": false
            }
          ]
        }
    ]
}


module.exports = { welcome, support, notify, applications };