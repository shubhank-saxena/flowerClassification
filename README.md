<div align="center">
<h1>flowerClassification</h1>
</div>
This project is my introductory project to the world of Deep Learning. I trained an image classifier to recognize different species of flowers. I used ["Maria-Elena Nilsback and Andrew Zisserman's dataset of 102 flower categories"](http://www.robots.ox.ac.uk/~vgg/data/flowers/102/index.html) for training. The flowers chosen to be flower commonly occuring in the United Kingdom. Each class consists of between 40 and 258 images.<br/>

I used [VGG](https://arxiv.org/abs/1409.1556) as my pre-trained model for feature extraction and the following structure is of the classifier model layers on top of it 

```
(classifier): Sequential(
    (fc1): Linear(in_features=25088, out_features=4000, bias=True)
    (relu1): ReLU()
    (drop1): Dropout(p=0.55)
    (fc2): Linear(in_features=4000, out_features=2000, bias=True)
    (relu2): ReLU()
    (drop2): Dropout(p=0.55)
    (fc3): Linear(in_features=2000, out_features=1000, bias=True)
    (relu3): ReLU()
    (drop3): Dropout(p=0.55)
    (fc4): Linear(in_features=1000, out_features=500, bias=True)
    (relu4): ReLU()
    (drop4): Dropout(p=0.55)
    (fc5): Linear(in_features=500, out_features=102, bias=True)
    (output): LogSoftmax()
  )
```

As I trained images on the ImageNet dataset where each color channel was normalized separately.So, I normalized the image colors accordingly. For the means, it's [0.485, 0.456, 0.406] and for the standard deviations [0.229, 0.224, 0.225], calculated from the ImageNet images. These values shifted each color channel to be centered at 0 and range from -1 to 1.

For list of all the classes, you can refer to [cat_to_name.json file](https://github.com/shubhank-saxena/flowerClassification/blob/master/backend/cat_to_name.json)


## Contribution to the project

------------

<div align="center">

[![GitHub issues](https://img.shields.io/github/issues/shubhank-saxena/flowerClassification?logo=github)](https://github.com/shubhank-saxena/flowerClassification/issues) ![GitHub pull requests](https://img.shields.io/github/issues-pr-raw/shubhank-saxena/flowerClassification?logo=git&logoColor=white)

</div>
Please follow a systematic Git Workflow -

- Create a fork of this repo.
- Clone your fork of your repo on your pc.
- [Add Upstream to your clone](https://help.github.com/en/github/collaborating-with-issues-and-pull-requests/configuring-a-remote-for-a-fork)
- **Every change** that you do, it has to be on a branch. Commits on master would directly be closed.
- Make sure that before you create a new branch for new changes,[syncing with upstream](https://help.github.com/en/github/collaborating-with-issues-and-pull-requests/syncing-a-fork) is neccesary.

## Commits

- Write clear meaningful git commit messages (Do read [this](http://chris.beams.io/posts/git-commit/)).
- Make sure your PR's description contains GitHub's special keyword references that automatically close the related issue when the PR is merged. (Check [this](https://github.com/blog/1506-closing-issues-via-pull-requests) for more info)
- When you make very very minor changes to a PR of yours (like for example fixing a failing Travis build or some small style corrections or minor changes requested by reviewers) make sure you squash your commits afterward so that you don't have an absurd number of commits for a very small fix. (Learn how to squash at [here](https://davidwalsh.name/squash-commits-git))
- When you're submitting a PR for a UI-related issue, it would be really awesome if you add a screenshot of your change or a link to a deployment where it can be tested out along with your PR. It makes it very easy for the reviewers and you'll also get reviews quicker.


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

- Start the backend server
  `python manage.py runserver`
  
**This runs the backend server at default port `8000`.
  Open [http://localhost:8000](http://localhost:8000) to view it in the browser.**<br />

### Setup and running of project (Frontend)

- At your root directory run `yarn install` to install all the dependencies
- To start react dev server `yarn start`

This runs the app in the development mode.<br />
**Open [http://localhost:3000](http://localhost:3000) to view it in the browser.**

The page will reload if you make edits.<br />
