#!/bin/sh

if [[ "$TRAVIS_PYTHON_VERSION" == "2.7" ]]; then
  wget https://repo.continuum.io/miniconda/Miniconda2-latest-Linux-x86_64.sh -O miniconda.sh;
else
  wget https://repo.continuum.io/miniconda/Miniconda3-latest-Linux-x86_64.sh -O miniconda.sh;
fi

bash miniconda.sh -b -p $HOME/miniconda
hash -r
conda config --set always_yes yes --set changeps1 no
conda update -q conda
conda install python 3.6
conda info -a

conda install --file requirements_qed/requirements.txt
pip install -r requirements_qed/requirements.txt
pip install mechanicalsoup
