# Crowdtrain web frontend
A React frontend for our web platform

Very much a work-in-progress, full of placeholders. Feel free to make pull requests.

![image](https://github.com/Crowdtrain-AI/web-frontend/assets/172853169/c217c13f-aaf6-4e76-974c-fa40d1d72418)

## Sitemap plan
/ - Home, hero, featured projects, call-to-actions

/models - Grid feed of model project cards, with search

/get-started - Instructions on how to install desktop training software

/create-project - Form to publish model training project

/login - SSO portal

/model/:modelId - Model project detail view, statistics, image carousel, details

...much more to come

## Technologies
- React
- Tailwind
- NextUI
- Vite

## Abstract
Crowdtrain's web frontend serves to pair visitors with model makers to support or contribute to training. Model makers publish a pitch, like a crowdfunding campaign, and instead of donating (which will also be an option), the main call-to-action is to begin training at the model's latest checkpoint with some of the dataset. The web platform connects to another application by Crowdtrain, which is installed onto a desktop machine or server, and receives instructions from the user on what model to download, train, and where to communicate progress weights.
