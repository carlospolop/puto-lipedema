# Advanced pneumatic compression full-text snippets (PMC12113227) and NCT06898125


# NCT06898125 structured

## identificationModule
```json
{
  "nctId": "NCT06898125",
  "orgStudyIdInfo": {
    "id": "13.03.2023/16"
  },
  "organization": {
    "fullName": "Giresun University",
    "class": "OTHER"
  },
  "briefTitle": "Evaluation of Extracorporeal Shockwave Therapy and Complex Decongestive Therapy Results in Patients With Lipedema",
  "officialTitle": "Evaluation of Extracorporeal Shockwave Therapy (ESWT) and Complex Decongestive Therapy (CDT) Results in Patients With Lipoedema"
}
```

## statusModule
```json
{
  "statusVerifiedDate": "2025-08",
  "overallStatus": "COMPLETED",
  "expandedAccessInfo": {
    "hasExpandedAccess": false
  },
  "startDateStruct": {
    "date": "2023-09-01",
    "type": "ACTUAL"
  },
  "primaryCompletionDateStruct": {
    "date": "2025-04-30",
    "type": "ACTUAL"
  },
  "completionDateStruct": {
    "date": "2025-06-01",
    "type": "ACTUAL"
  },
  "studyFirstSubmitDate": "2025-03-18",
  "studyFirstSubmitQcDate": "2025-03-25",
  "studyFirstPostDateStruct": {
    "date": "2025-03-27",
    "type": "ACTUAL"
  },
  "lastUpdateSubmitDate": "2025-08-24",
  "lastUpdatePostDateStruct": {
    "date": "2025-08-26",
    "type": "ACTUAL"
  }
}
```

## designModule
```json
{
  "studyType": "INTERVENTIONAL",
  "phases": [
    "NA"
  ],
  "designInfo": {
    "allocation": "RANDOMIZED",
    "interventionModel": "PARALLEL",
    "interventionModelDescription": "randomized controlled trials",
    "primaryPurpose": "TREATMENT",
    "maskingInfo": {
      "masking": "SINGLE",
      "maskingDescription": "Outcome measures were assessed by the investigator who was blinded to each patient's group. The participants and therapists were not blinded to the group allocation. Patients were briefed to not disclose which group they were in during the assessment process.",
      "whoMasked": [
        "OUTCOMES_ASSESSOR"
      ]
    }
  },
  "enrollmentInfo": {
    "count": 33,
    "type": "ACTUAL"
  }
}
```

## armsInterventionsModule
```json
{
  "armGroups": [
    {
      "label": "Complex Decongestive Therapy",
      "type": "ACTIVE_COMPARATOR",
      "description": "In this group, Complex Decongestive Therapy treatment will be applied to both lower extremities for two weeks, three sessions per week.",
      "interventionNames": [
        "Other: Complex Decongestive Therapy"
      ]
    },
    {
      "label": "Extracorporeal Shockwave Therapy",
      "type": "EXPERIMENTAL",
      "description": "This group will receive therapy for two weeks, three sessions per week, with the Modus ESWT® Radial Shockwave Therapy ( İnceler Medikal, Turkey ) brand ESWT device (35mm radial wavy head); 3000 impulse 15 Hz will be applied to both lower extremities with an average energy level of 3.5.",
      "interventionNames": [
        "Other: Extracorporeal Shockwave Therapy"
      ]
    },
    {
      "label": "Extracorporeal Shockwave Therapy and Complex Decongestive Therapy",
      "type": "EXPERIMENTAL",
      "description": "In this group, first Extracorporeal Shockwave Therapy and then Complex Decongestive Therapy treatment will be applied in the same session for two weeks, three sessions a week.",
      "interventionNames": [
        "Other: Extracorporeal Shockwave Therapy",
        "Other: Complex Decongestive Therapy"
      ]
    }
  ],
  "interventions": [
    {
      "type": "OTHER",
      "name": "Extracorporeal Shockwave Therapy",
      "description": "Shock wave therapy is a new modality for the improvement of cellulite and lipedema; it is an easy, noninvasive, local therapy, without side effects, with short periods of application. Its original idea was the stimulation of lipid mobilization and improved lipolysis in areas with edema.",
      "armGroupLabels": [
        "Extracorporeal Shockwave Therapy",
        "Extracorporeal Shockwave Therapy and Complex Decongestive Therapy"
      ]
    },
    {
      "type": "OTHER",
      "name": "Complex Decongestive Therapy",
      "description": "Complex decongestive therapy (CDT) is one of the most important treatment modalities of choice for patients with this clinical condition. CDT has two phases: treatment and maintenance. The first stage consists of skin care, manual lymph drainage, kinesiotherapy and bandaging of the limb. Drainage can facilitate the return of lymphatic flow by stimulating the cisterna chyli. Next, kinesiotherapy is applied, which aims to activate the lymph. Finally, the limb is moistened and then a compressive bandage is applied aimed at creating a pressure gradient towards the areas where lymph absorption is greater. The second phase continues skin care, physical exercises and external compression applications using bandages with varying degrees of elasticity.",
      "armGroupLabels": [
        "Complex Decongestive Therapy",
        "Extracorporeal Shockwave Therapy and Complex Decongestive Therapy"
      ]
    }
  ]
}
```

## outcomesModule
```json
{
  "primaryOutcomes": [
    {
      "measure": "Dual-energy X-ray absorptiometry (DXA)",
      "description": "DXA measurements were made with the patient in the supine position, with a radiation dose of 5.08 μSv, voltage 83.00 Kv, and current 0.2 mA from the head-to-heel distance by Osteosys Primus brand DXA device (Primus, X-ray densitometer, Osteosys Co. Ltd., Guro-gu, Seoul, Korea) will be made. With this measurement, the radiation dose received by the patient is very low and is below the daily natural radiation dose (7 μSv). With the obtained values, leg FM/total FM, android/gynoid fat ratios and fat mass (FM, fat mass) will be calculated using Osteosys Primus version 1.2.0 software. As a result of DXA measurements of the patients, Body Composition, Fat Mass, leg FM/total FM, Android/Gynoid FM values will be compared.",
      "timeFrame": "measurements will be taken before treatment and at the 2nd week after treatment."
    },
    {
      "measure": "Volume measurement",
      "description": "For volume measurements in the lower extremities of the patients, circumference measurements will be taken from the ankle to the thigh at 4 cm intervals; then these values will be calculated automatically with the Pythagorean theorem in the Excel program.",
      "timeFrame": "measurements will be taken before treatment and at the 2nd week after treatment."
    }
  ],
  "secondaryOutcomes": [
    {
      "measure": "Quality of life - Nottingham Health Profile (NHP):",
      "description": "Nottingham Health Profile (NHP) is a general quality of life questionnaire that evaluates patients' perceptions of health problems and the effects of these problems on patients' activities of daily living. Pain, emotional reactions, sleep, social isolation, physical abilities and energy level subscales are evaluated. For each subscale, 0 points corresponds to the best health profile and 100 points corresponds to the worst health profile. The total NHP score is obtained by summing the subscale scores.",
      "timeFrame": "measurements will be taken before treatment and at the 2nd week after treatment."
    },
    {
      "measure": "Algometric measurements",
      "description": "The pain threshold of the patients will be measured from the right and left extremities with a Wagner brand manual algometer. Before the evaluation is made, the patients will be informed about how the measurement will be made, and they will be asked to give information as soon as the feeling of pressure returns to the feeling of pain. For the measurement, the compression applied by keeping the probe of the algometer device perpendicular to the measuring surface will be gradually increased at the rate of approximately 0.5kg/cm²/s. The compression applied at the point where the patients feel pain will be terminated. The measurement will be made twice in the same area and 4 minutes will be waited before the second measurement is taken. The average of the two measurements will be recorded as the pressure pain threshold.",
      "timeFrame": "measurements will be taken before treatment and at the 2nd week after treatment."
    },
    {
      "measure": "Visual Analogue Scale (VAS)",
      "description": "Pain intensity was measured with the Visual Analog Scale (0-10 mm; 0 means no pain, 10 means severe pain), which has a high reliability and validity in measuring musculoskeletal pain.",
      "timeFrame": "measurements will be taken before treatment and at the 2nd week after treatment."
    }
  ]
}
```

## eligibilityModule
```json
{
  "eligibilityCriteria": "Inclusion Criteria:\n\n* Female\n* 18 years or older\n* Being diagnosed with lipedema according to Wold criteria\n* Having type 1, 2 and 3 lipedema\n* Having stage 1, 2 and 3 lipedema\n\nExclusion Criteria:\n\n* Known rheumatic, endocrinological, neuromuscular, dermatological disease, kidney failure, liver failure and malignancy\n* Having undergone surgery for lipedema\n* Having poor circulation, open wound or infection in the lower extremities",
  "healthyVolunteers": false,
  "sex": "FEMALE",
  "minimumAge": "18 Years",
  "stdAges": [
    "ADULT",
    "OLDER_ADULT"
  ]
}
```

