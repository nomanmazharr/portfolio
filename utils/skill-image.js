import css from '/public/svg/skills/css.svg';
import git from '/public/svg/skills/git.svg';
import html from '/public/svg/skills/html.svg';
import opencv from '/public/svg/skills/opencv.svg';
import tensorflow from '/public/svg/skills/tensorflow.svg';
import numpy from '/public/svg/skills/numpy.svg';
import pandas from '/public/svg/skills/pandas.svg';
import sklearn from '/public/svg/skills/scikitlearn.svg';
import pycharm from '/public/svg/skills/pycharm.svg';
import conda from '/public/svg/skills/anaconda.svg';
import jupyter from '/public/svg/skills/jupyter.svg';
import flask from '/public/svg/skills/flask.svg';
import streamlit from '/public/svg/skills/streamlit.svg';
import javascript from '/public/svg/skills/javascript.svg';
import mysql from '/public/svg/skills/mysql.svg';
import canva from '/public/svg/skills/canva.svg';
import pytorch from '/public/svg/skills/pytorch.svg';
import python from '/public/svg/skills/python.svg'; 
import pypi from '/public/svg/skills/pypi.svg'

export const skillsImage = (skill) => {
  const skillID = skill.toLowerCase();
  switch (skillID) {
    case 'html':
      return html;
    case 'css':
      return css;
    case 'javascript':
      return javascript;
    case 'mysql':
      return mysql;
    case 'python':
      return python;
    case 'git':
      return git;
    case 'numpy':
      return numpy;
    case 'opencv':
      return opencv;
    case 'pytorch':
      return pytorch;
    case 'tensorflow':
      return tensorflow;
    case 'canva':
      return canva;
    case 'pandas':
      return pandas;
    case 'streamlit':
      return streamlit
    case 'pypi':
      return pypi;
    case 'sklearn':
      return sklearn;
    case 'pycharm':
      return pycharm;
    case 'conda':
      return conda;
    case 'jupyter':
      return jupyter;
    case 'flask':
      return flask;
    default:
      break;
  }
}
