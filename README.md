<div align="center">
<h1>flowerClassification</h1>

[![Build Status](https://travis-ci.org/shubhank-saxena/flowerClassification.svg?branch=master)](https://travis-ci.org/github/shubhank-saxena/flowerClassification) [![GitHub issues](https://img.shields.io/github/issues/shubhank-saxena/flowerClassification?logo=github)](https://github.com/shubhank-saxena/flowerClassification/issues)
![Size](https://github-size-badge.herokuapp.com/shubhank-saxena/flowerClassification.svg)<a> <img src="https://badgen.net/dependabot/shubhank-saxena/My-Portfolio?icon=dependabot" alt="Dependabot Badge"></a>

[![Pre-commit](https://img.shields.io/badge/pre--commit-enabled-brightgreen?logo=pre-commit&logoColor=white)](https://github.com/shubhank-saxena/flowerClassification/blob/master/.pre-commit-config.yaml)
[![License](https://img.shields.io/github/license/shubhank-saxena/flowerClassification)](https://github.com/shubhank-saxena/flowerClassification/blob/master/LICENSE)
</div>
This project is my introductory project to the world of Deep Learning. I trained an image classifier to recognize different species of flowers. I used [Maria-Elena Nilsback and Andrew Zisserman's dataset of 102 flower categories](http://www.robots.ox.ac.uk/~vgg/data/flowers/102/index.html) for training. The flowers chosen to be flower commonly occuring in the United Kingdom. Each class consists of between 40 and 258 images.<br/>

I used [ResNet](https://arxiv.org/abs/1512.03385) as my pre-trained model for feature extraction and the following structure is of the classifier model layers on top of it 

```
(classifier): Sequential(
    (fc1): Linear(in_features=9216, out_features=4096, bias=True)
    (relu1): ReLU()
    (dropout1): Dropout(p=0.3, inplace=False)
    (fc2): Linear(in_features=4096, out_features=2048, bias=True)
    (relu2): ReLU()
    (dropout2): Dropout(p=0.3, inplace=False)
    (fc3): Linear(in_features=2048, out_features=102, bias=True)
    (output): LogSoftmax()
  )
```

For list of all the classes, you can refer to [cat_to_name.json file](https://github.com/shubhank-saxena/flowerClassification/blob/master/backend/cat_to_name.json)

## Contribution to the project

<div align="center">

[![GitHub issues](https://img.shields.io/github/issues/shubhank-saxena/flowerClassification?logo=github)](https://github.com/shubhank-saxena/flowerClassification/issues) ![GitHub pull requests](https://img.shields.io/github/issues-pr-raw/shubhank-saxena/flowerClassification?logo=git&logoColor=white)

</div>
Please follow a systematic Git Workflow -

- Create a fork of this repo.
- Clone your fork of your repo on your pc.
- [Add Upstream to your clone](https://help.github.com/en/github/collaborating-with-issues-and-pull-requests/configuring-a-remote-for-a-fork)
- **Every change** that you do, it has to be on a branch. Commits on master would directly be closed.
- Make sure that before you create a new branch for new changes,[syncing with upstream](https://help.github.com/en/github/collaborating-with-issues-and-pull-requests/syncing-a-fork) is neccesary.

### Commits

- Write clear meaningful git commit messages (Do read [this](http://chris.beams.io/posts/git-commit/)).
- Make sure your PR's description contains GitHub's special keyword references that automatically close the related issue when the PR is merged. (Check [this](https://github.com/blog/1506-closing-issues-via-pull-requests) for more info)
- When you make very very minor changes to a PR of yours (like for example fixing a failing Travis build or some small style corrections or minor changes requested by reviewers) make sure you squash your commits afterward so that you don't have an absurd number of commits for a very small fix. (Learn how to squash at [here](https://davidwalsh.name/squash-commits-git))
- When you're submitting a PR for a UI-related issue, it would be really awesome if you add a screenshot of your change or a link to a deployment where it can be tested out along with your PR. It makes it very easy for the reviewers and you'll also get reviews quicker.

#### For those of you who want to use the trained model, download it from [here](https://drive.google.com/file/d/1iDKgdryfb-icKX1NcTesC5LA8Q0pegex/view?usp=sharing). If you are interested to contribute to the model/project (see to-do below), please do drop me an email at `saxena.shubhank.19@gmail.com` and we can work together on the training part.

## Installation and Setup

### Setup and running of project (Backend)

- Fork the repo and clone it.
- Go in the repo and setup virtualenvironment using
  `python -m virtualenv env`
- Then activate the environment using
  `source env/Scripts/activate` (Use only `env/Scripts/activate` if on cmd or powershell)
- For Linux Users it will be `source env/bin/activate`
- At the root of your project directory <br>

```bash
pip install -r requirements.txt
pre-commit install
```

- This will setup the project requirements and pre-commit test hooks!
- Install [Pytorch](https://pytorch.org/) if you want to work on the model/training part.
- Start the backend server
  `python backend/app.py`
  
**This runs the backend server at default port `5000`.
  Open [http://localhost:5000](http://localhost:5000) to view it in the browser.**<br />

### Setup and running of project (Frontend)

- At your root directory run `yarn install` to install all the dependencies
- To start react dev server `yarn start`

This runs the app in the development mode.<br />
**Open [http://localhost:3000](http://localhost:3000) to view it in the browser.**

The page will reload if you make edits.<br />

## To-Do tasks
- [ ] Add Indian Species of flowers
- [ ] Convert entire application to cross platfrom mobile app
- [ ] Display information about the predicted flower.
  - [ ] Blooming conditions
  - [ ] Typical diseases
  - [ ] Any significant properties
  - [ ] Favourable place/conditions
- [ ] Display scientific name of the specie as well
- [ ] Local name of the flower to be displayed