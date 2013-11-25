# -*- coding: utf-8 -*-
"""
Created on Tue Jan 31 11:55:40 2012

@author: jharston
"""
import os
os.environ['DJANGO_SETTINGS_MODULE']='settings'
from django import forms
from django.db import models
from google.appengine.api import users
from google.appengine.ext import db
from aquatic_toxicity import AquaticToxicity
import datetime

class ATInp(forms.Form):
    user_aqua_configuration = forms.ChoiceField(label="Aquatic Toxicity Saved Use Configuration",required=True)
    config_name = forms.CharField(label="Aquatic Toxicity Configuration Name", initial="aquatic-toxicity-config-%s"%datetime.datetime.now())
    duckweed = forms.FloatField(label='Listed Vascular Aquatic Plants(NOAEC x LOC)')
    mai = forms.FloatField(label='Mass of Applied Ingredient to Paddy(kg)')
    a = forms.FloatField(label='Area of Rice Paddy(m2)')
    dsed = forms.FloatField(label='Sediment Depth(m)')
    pb = forms.FloatField(label='Bulk Density of Dediment(kg/m3)')
    dw = forms.FloatField(label='Water Column Depth(m)')
    osed = forms.FloatField(label='Water-sediment Partitioning Coefficient(L/kg)')
    kd = forms.FloatField(label='Porosity of Sediment')
    msed = forms.FloatField(label='Sediment Mass(kg)')
    vw = forms.FloatField(label='Water Column Volume(m3)')
    mai1 = forms.FloatField(label='Mass per unit area(kg/ha)')
    cw = forms.FloatField(label='Water Concentration(ug/L)')
    lf_p_sediment = forms.IntegerField(label='Large fish diet percent sediment')
    lf_p_phytoplankton = forms.IntegerField(label='Large fish diet percent phytoplankton')
    lf_p_zooplankton = forms.IntegerField(label='Large fish diet percent zooplankton')
    lf_p_benthic_invertebrates = forms.IntegerField(label='Large fish diet percent benthic invertebrates')
    lf_p_filter_feeders = forms.IntegerField(label='Large fish diet percent filter feeders')
    lf_p_small_fish = forms.IntegerField(label='Large fish diet percent small fish')
    lf_p_medium_fish = forms.IntegerField(label='Large fish diet percent medium fish')
    mf_p_sediment = forms.IntegerField(label='Medium fish diet percent sediment')
    mf_p_phytoplankton = forms.IntegerField(label='Medium fish diet percent phytoplankton')
    mf_p_zooplankton = forms.IntegerField(label='Medium fish diet percent zooplankton')
    mf_p_benthic_invertebrates = forms.IntegerField(label='Medium fish diet percent benthic invertebrates')
    mf_p_filter_feeders = forms.IntegerField(label='Medium fish diet percent filter feeders')
    mf_p_small_fish = forms.IntegerField(label='Medium fish diet percent small fish')
    sf_p_sediment = forms.IntegerField(label='Small fish diet percent sediment')
    sf_p_phytoplankton = forms.IntegerField(label='Small fish diet percent phytoplankton')
    sf_p_zooplankton = forms.IntegerField(label='Small fish diet percent zooplankton')
    sf_p_benthic_invertebrates = forms.IntegerField(label='Small fish diet percent benthic invertebrates')
    sf_p_filter_feeders = forms.IntegerField(label='Small fish diet percent filter feeders')
    ff_p_sediment = forms.IntegerField(label='Filter Feeder diet percent sediment')
    ff_p_phytoplankton = forms.IntegerField(label='Filter Feeder diet percent phytoplankton')
    ff_p_zooplankton = forms.IntegerField(label='Filter Feeder diet percent zooplankton')
    ff_p_benthic_invertebrates = forms.IntegerField(label='Filter Feeder diet percent benthic invertebrates')
    beninv_p_sediment = forms.IntegerField(label='Benthic invertebrates diet percent sediment')
    beninv_p_phytoplankton = forms.IntegerField(label='Benthic invertebrates diet percent phytoplankton')
    beninv_p_zooplankton = forms.IntegerField(label='Benthic invertebrates diet percent zooplankton')
    zoo_p_sediment = forms.IntegerField(label='Zooplankton diet percent sediment')
    zoo_p_phytoplankton = forms.IntegerField(label='Zooplankton diet percent phytoplankton')
    s_lipid = forms.IntegerField(label='Sediment percent lipids')
    s_NLOM = forms.IntegerField(label='Sediment percent non lipid organic matter')
    s_water = forms.IntegerField(label='Sediment percent percent water')
    v_lb_phytoplankton = forms.IntegerField(label='Phytoplankton percent lipids')
    v_nb_phytoplankton = forms.IntegerField(label='Phytoplankton percent non lipid organic matter')
    v_wb_phytoplankton = forms.IntegerField(label='Phytoplankton percent percent water')
    v_lb_zoo = forms.IntegerField(label='Zooplankton percent lipids')
    v_nb_zoo = forms.IntegerField(label='Zooplankton percent non lipid organic matter')
    v_wb_zoo = forms.IntegerField(label='Zooplankton percent percent water')
    v_lb_beninv = forms.IntegerField(label='Benthic invertebrates percent lipids')
    v_nb_beninv = forms.IntegerField(label='Benthic invertebrates percent non lipid organic matter')
    v_wb_beninv = forms.IntegerField(label='Benthic invertebrates percent percent water')
    v_lb_ff = forms.IntegerField(label='Filter feeders percent lipids')
    v_nb_ff = forms.IntegerField(label='Filter feeders percent non lipid organic matter')
    v_wb_ff = forms.IntegerField(label='Filter feeders percent percent water')
    v_lb_sf = forms.IntegerField(label='Small fish percent lipids')
    v_nb_sf = forms.IntegerField(label='Small fish percent non lipid organic matter')
    v_wb_sf = forms.IntegerField(label='Small fish percent percent water')
    v_lb_mf = forms.IntegerField(label='Medium fish percent lipids')
    v_nb_mf = forms.IntegerField(label='Medium fish percent non lipid organic matter')
    v_wb_mf = forms.IntegerField(label='Medium fish percent percent water')
    v_lb_lf = forms.IntegerField(label='Large fish percent lipids')
    v_nb_lf = forms.IntegerField(label='Large fish percent non lipid organic matter')
    v_wb_lf = forms.IntegerField(label='Large fish percent percent water')
    k1_phytoplankton = forms.IntegerField(label='Phytoplankton k1 constant(L/kg*d)')
    k2_phytoplankton = forms.IntegerField(label='Phytoplankton k2 constant(d-1)')
    ke_phytoplankton = forms.IntegerField(label='Phytoplankton ke constant(d-1)')
    kd_phytoplankton = forms.IntegerField(label='Phytoplankton kd constant(kg-food/kg-org/d)')
    km_phytoplankton = forms.IntegerField(label='Phytoplankton km constant')
    k1_zoo = forms.IntegerField(label='Zooplankton k1 constant(L/kg*d)')
    k2_zoo = forms.IntegerField(label='Zooplankton k2 constant(d-1)')
    ke_zoo = forms.IntegerField(label='Zooplankton ke constant(d-1)')
    kd_zoo = forms.IntegerField(label='Zooplankton kd constant(kg-food/kg-org/d)')
    km_zoo = forms.IntegerField(label='Zooplankton km constant(d-1)')
    k1_beninv = forms.IntegerField(label='Benthic invertebrates k1 constant(L/kg*d)')
    k2_beninv = forms.IntegerField(label='Benthic invertebrates k2 constant(d-1)')
    ke_beninv = forms.IntegerField(label='Benthic invertebrates ke constant(d-1)')
    kd_beninv = forms.IntegerField(label='Benthic invertebrates kd constant(kg-food/kg-org/d)')
    km_beninv = forms.IntegerField(label='Benthic invertebrates km constant(d-1)')
    k1_ff = forms.IntegerField(label='Filter feeders k1 constant(L/kg*d)')
    k2_ff = forms.IntegerField(label='Filter feeders k2 constant(d-1)')
    ke_ff = forms.IntegerField(label='Filter feeders ke constant(d-1)')
    kd_ff = forms.IntegerField(label='Filter feeders kd constant(kg-food/kg-org/d)')
    km_ff = forms.IntegerField(label='Filter feeders km constant(d-1)')
    k1_sf = forms.IntegerField(label='Small Fish k1 constant(L/kg*d)')
    k2_sf = forms.IntegerField(label='Small Fish k2 constant(d-1)')
    ke_sf = forms.IntegerField(label='Small Fish ke constant(d-1)')
    kd_sf = forms.IntegerField(label='Small Fish kd constant(kg-food/kg-org/d)')
    km_sf = forms.IntegerField(label='Small Fish km constant(d-1)')
    k1_mf = forms.IntegerField(label='Medium Fish k1 constant(L/kg*d)')
    k2_mf = forms.IntegerField(label='Medium Fish k2 constant(d-1)')
    ke_mf = forms.IntegerField(label='Medium Fish ke constant(d-1)')
    kd_mf = forms.IntegerField(label='Medium Fish kd constant(kg-food/kg-org/d)')
    km_mf = forms.IntegerField(label='Medium Fish km constant(d-1)')
    k1_lf = forms.IntegerField(label='Large Fish k1 constant(L/kg*d)')
    k2_lf = forms.IntegerField(label='Large Fish k2 constant(d-1)')
    ke_lf = forms.IntegerField(label='Large Fish ke constant(d-1)')
    kd_lf = forms.IntegerField(label='Large Fish kd constant(kg-food/kg-org/d)')
    km_lf = forms.IntegerField(label='Large Fish km constant(d-1)')
    s_respire = forms.IntegerField(label='Sediment respire pore water')
    phyto_respire = forms.IntegerField(label='Phytoplankton respire pore water')
    zoo_respire = forms.IntegerField(label='Zooplankton respire pore water')
    beninv_respire = forms.IntegerField(label='Benthic invertebrates respire pore water')
    ff_respire = forms.IntegerField(label='Filter feeders respire pore water')
    sfish_respire = forms.IntegerField(label='Small fish respire pore water')
    mfish_respire = forms.IntegerField(label='Medium fish respire pore water')
    lfish_respire = forms.IntegerField(label='Large fish respire pore water')
    kg_phytoplankton = forms.FloatField(label='Phytoplankton growth rate constant(%)')
    mp_phytoplankton = forms.FloatField(label='Fraction of respiratory ventilation involving pore water(%)')
    mo_phytoplankton = forms.FloatField(label='Fraction of respiratory ventilation involving overlying water(%)')
>>>>>>> chance
    created = db.DateTimeProperty(auto_now_add=True)    
