import * as React from "react";
import "antd/dist/antd.css";
import "./XG.scss";

class XG1 extends React.Component {
  render() {
    return (
      <table className="dataframe league-table finishers">
        <thead>
          <tr className="table-header">
            <th>No.</th>
            <th>Player Name</th>
            <th>Total Shots</th>
            <th>Goals Scored</th>
            <th>Expected Goals (xG)</th>
            <th>Difference</th>
            <th>xG To Shot Ratio</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th>0</th>
            <td>lionel messi</td>
            <td>914</td>
            <td>205.0</td>
            <td>147.785301</td>
            <td>-57.214699</td>
            <td>0.161691</td>
          </tr>
          <tr>
            <th>1</th>
            <td>luis suarez</td>
            <td>433</td>
            <td>96.0</td>
            <td>66.885136</td>
            <td>-29.114864</td>
            <td>0.154469</td>
          </tr>
          <tr>
            <th>2</th>
            <td>zlatan ibrahimovic</td>
            <td>774</td>
            <td>153.0</td>
            <td>124.539731</td>
            <td>-28.460269</td>
            <td>0.160904</td>
          </tr>
          <tr>
            <th>3</th>
            <td>gonzalo higuain</td>
            <td>552</td>
            <td>118.0</td>
            <td>89.582126</td>
            <td>-28.417874</td>
            <td>0.162286</td>
          </tr>
          <tr>
            <th>4</th>
            <td>cristiano ronaldo</td>
            <td>1190</td>
            <td>198.0</td>
            <td>172.517022</td>
            <td>-25.482978</td>
            <td>0.144972</td>
          </tr>
          <tr>
            <th>5</th>
            <td>robert lewandowski</td>
            <td>633</td>
            <td>124.0</td>
            <td>99.958186</td>
            <td>-24.041814</td>
            <td>0.157912</td>
          </tr>
          <tr>
            <th>6</th>
            <td>alexandre lacazette</td>
            <td>391</td>
            <td>88.0</td>
            <td>65.477343</td>
            <td>-22.522657</td>
            <td>0.167461</td>
          </tr>
          <tr>
            <th>7</th>
            <td>antoine griezmann</td>
            <td>493</td>
            <td>80.0</td>
            <td>60.674942</td>
            <td>-19.325058</td>
            <td>0.123073</td>
          </tr>
          <tr>
            <th>8</th>
            <td>alexis sanchez</td>
            <td>445</td>
            <td>80.0</td>
            <td>60.690420</td>
            <td>-19.309580</td>
            <td>0.136383</td>
          </tr>
          <tr>
            <th>9</th>
            <td>karim benzema</td>
            <td>434</td>
            <td>85.0</td>
            <td>65.942142</td>
            <td>-19.057858</td>
            <td>0.151940</td>
          </tr>
          <tr>
            <th>10</th>
            <td>diego costa</td>
            <td>410</td>
            <td>93.0</td>
            <td>75.104347</td>
            <td>-17.895653</td>
            <td>0.183181</td>
          </tr>
          <tr>
            <th>11</th>
            <td>franck ribery</td>
            <td>226</td>
            <td>40.0</td>
            <td>22.639183</td>
            <td>-17.360817</td>
            <td>0.100173</td>
          </tr>
          <tr>
            <th>12</th>
            <td>eden hazard</td>
            <td>332</td>
            <td>62.0</td>
            <td>45.046184</td>
            <td>-16.953816</td>
            <td>0.135681</td>
          </tr>
          <tr>
            <th>13</th>
            <td>mario mandzukic</td>
            <td>329</td>
            <td>67.0</td>
            <td>51.158645</td>
            <td>-15.841355</td>
            <td>0.155497</td>
          </tr>
          <tr>
            <th>14</th>
            <td>wissam ben yedder</td>
            <td>367</td>
            <td>69.0</td>
            <td>54.078384</td>
            <td>-14.921616</td>
            <td>0.147353</td>
          </tr>
          <tr>
            <th>15</th>
            <td>fernando llorente</td>
            <td>282</td>
            <td>56.0</td>
            <td>41.342096</td>
            <td>-14.657904</td>
            <td>0.146603</td>
          </tr>
          <tr>
            <th>16</th>
            <td>marco reus</td>
            <td>408</td>
            <td>65.0</td>
            <td>50.730262</td>
            <td>-14.269738</td>
            <td>0.124339</td>
          </tr>
          <tr>
            <th>17</th>
            <td>mauro icardi</td>
            <td>323</td>
            <td>72.0</td>
            <td>57.785937</td>
            <td>-14.214063</td>
            <td>0.178904</td>
          </tr>
          <tr>
            <th>18</th>
            <td>gareth bale</td>
            <td>301</td>
            <td>50.0</td>
            <td>35.786042</td>
            <td>-14.213958</td>
            <td>0.118891</td>
          </tr>
          <tr>
            <th>19</th>
            <td>alexander meier</td>
            <td>291</td>
            <td>57.0</td>
            <td>43.291728</td>
            <td>-13.708272</td>
            <td>0.148769</td>
          </tr>
          <tr>
            <th>20</th>
            <td>miroslav klose</td>
            <td>205</td>
            <td>51.0</td>
            <td>38.509038</td>
            <td>-12.490962</td>
            <td>0.187849</td>
          </tr>
          <tr>
            <th>21</th>
            <td>harry kane</td>
            <td>353</td>
            <td>65.0</td>
            <td>52.556966</td>
            <td>-12.443034</td>
            <td>0.148887</td>
          </tr>
          <tr>
            <th>22</th>
            <td>bas dost</td>
            <td>137</td>
            <td>36.0</td>
            <td>23.906053</td>
            <td>-12.093947</td>
            <td>0.174497</td>
          </tr>
          <tr>
            <th>23</th>
            <td>mario gotze</td>
            <td>203</td>
            <td>37.0</td>
            <td>24.994029</td>
            <td>-12.005971</td>
            <td>0.123123</td>
          </tr>
          <tr>
            <th>24</th>
            <td>carlos tevez</td>
            <td>239</td>
            <td>39.0</td>
            <td>27.548329</td>
            <td>-11.451671</td>
            <td>0.115265</td>
          </tr>
          <tr>
            <th>25</th>
            <td>raffael</td>
            <td>318</td>
            <td>50.0</td>
            <td>38.779334</td>
            <td>-11.220666</td>
            <td>0.121948</td>
          </tr>
          <tr>
            <th>26</th>
            <td>arjen robben</td>
            <td>343</td>
            <td>50.0</td>
            <td>38.828671</td>
            <td>-11.171329</td>
            <td>0.113203</td>
          </tr>
          <tr>
            <th>27</th>
            <td>olivier giroud</td>
            <td>442</td>
            <td>71.0</td>
            <td>59.869051</td>
            <td>-11.130949</td>
            <td>0.135450</td>
          </tr>
          <tr>
            <th>28</th>
            <td>cheick diabate</td>
            <td>228</td>
            <td>47.0</td>
            <td>35.991931</td>
            <td>-11.008069</td>
            <td>0.157859</td>
          </tr>
          <tr>
            <th>29</th>
            <td>carlos bacca</td>
            <td>230</td>
            <td>57.0</td>
            <td>46.001342</td>
            <td>-10.998658</td>
            <td>0.200006</td>
          </tr>
          <tr>
            <th>30</th>
            <td>mohamed salah</td>
            <td>160</td>
            <td>29.0</td>
            <td>18.506692</td>
            <td>-10.493308</td>
            <td>0.115667</td>
          </tr>
          <tr>
            <th>31</th>
            <td>salomon kalou</td>
            <td>281</td>
            <td>56.0</td>
            <td>45.526441</td>
            <td>-10.473559</td>
            <td>0.162016</td>
          </tr>
          <tr>
            <th>32</th>
            <td>valere germain</td>
            <td>149</td>
            <td>30.0</td>
            <td>20.029965</td>
            <td>-9.970035</td>
            <td>0.134429</td>
          </tr>
          <tr>
            <th>33</th>
            <td>iago falque</td>
            <td>154</td>
            <td>26.0</td>
            <td>16.062664</td>
            <td>-9.937336</td>
            <td>0.104303</td>
          </tr>
          <tr>
            <th>34</th>
            <td>dimitri payet</td>
            <td>456</td>
            <td>44.0</td>
            <td>34.123482</td>
            <td>-9.876518</td>
            <td>0.074832</td>
          </tr>
          <tr>
            <th>35</th>
            <td>falcao</td>
            <td>381</td>
            <td>80.0</td>
            <td>70.178498</td>
            <td>-9.821502</td>
            <td>0.184196</td>
          </tr>
          <tr>
            <th>36</th>
            <td>heungmin son</td>
            <td>225</td>
            <td>32.0</td>
            <td>22.180773</td>
            <td>-9.819227</td>
            <td>0.098581</td>
          </tr>
          <tr>
            <th>37</th>
            <td>cedric barbosa</td>
            <td>111</td>
            <td>21.0</td>
            <td>11.343856</td>
            <td>-9.656144</td>
            <td>0.102197</td>
          </tr>
          <tr>
            <th>38</th>
            <td>yaya toure</td>
            <td>236</td>
            <td>37.0</td>
            <td>27.508287</td>
            <td>-9.491713</td>
            <td>0.116561</td>
          </tr>
          <tr>
            <th>39</th>
            <td>josip drmic</td>
            <td>97</td>
            <td>24.0</td>
            <td>14.547361</td>
            <td>-9.452639</td>
            <td>0.149973</td>
          </tr>
          <tr>
            <th>40</th>
            <td>claudio pizarro</td>
            <td>200</td>
            <td>47.0</td>
            <td>37.665620</td>
            <td>-9.334380</td>
            <td>0.188328</td>
          </tr>
          <tr>
            <th>41</th>
            <td>mesut ozil</td>
            <td>187</td>
            <td>33.0</td>
            <td>23.684490</td>
            <td>-9.315510</td>
            <td>0.126655</td>
          </tr>
          <tr>
            <th>42</th>
            <td>james rodriguez</td>
            <td>183</td>
            <td>27.0</td>
            <td>17.859730</td>
            <td>-9.140270</td>
            <td>0.097594</td>
          </tr>
          <tr>
            <th>43</th>
            <td>alberto bueno</td>
            <td>198</td>
            <td>32.0</td>
            <td>22.880932</td>
            <td>-9.119068</td>
            <td>0.115560</td>
          </tr>
          <tr>
            <th>44</th>
            <td>blerim dzemaili</td>
            <td>197</td>
            <td>24.0</td>
            <td>14.977664</td>
            <td>-9.022336</td>
            <td>0.076029</td>
          </tr>
          <tr>
            <th>45</th>
            <td>antonio cassano</td>
            <td>151</td>
            <td>29.0</td>
            <td>20.083135</td>
            <td>-8.916865</td>
            <td>0.133001</td>
          </tr>
          <tr>
            <th>46</th>
            <td>gregoire defrel</td>
            <td>134</td>
            <td>22.0</td>
            <td>13.141009</td>
            <td>-8.858991</td>
            <td>0.098067</td>
          </tr>
          <tr>
            <th>47</th>
            <td>isco</td>
            <td>267</td>
            <td>33.0</td>
            <td>24.228152</td>
            <td>-8.771848</td>
            <td>0.090742</td>
          </tr>
          <tr>
            <th>48</th>
            <td>pierreemerick aubameyang</td>
            <td>580</td>
            <td>100.0</td>
            <td>91.229665</td>
            <td>-8.770335</td>
            <td>0.157293</td>
          </tr>
          <tr>
            <th>49</th>
            <td>ivan perisic</td>
            <td>307</td>
            <td>41.0</td>
            <td>32.425258</td>
            <td>-8.574742</td>
            <td>0.105620</td>
          </tr>
          <tr>
            <th>50</th>
            <td>pedro</td>
            <td>267</td>
            <td>45.0</td>
            <td>36.443374</td>
            <td>-8.556626</td>
            <td>0.136492</td>
          </tr>
          <tr>
            <th>51</th>
            <td>younes belhanda</td>
            <td>148</td>
            <td>26.0</td>
            <td>17.455110</td>
            <td>-8.544890</td>
            <td>0.117940</td>
          </tr>
          <tr>
            <th>52</th>
            <td>nabil fekir</td>
            <td>151</td>
            <td>22.0</td>
            <td>13.466439</td>
            <td>-8.533561</td>
            <td>0.089182</td>
          </tr>
          <tr>
            <th>53</th>
            <td>javier hernandez</td>
            <td>112</td>
            <td>28.0</td>
            <td>19.554662</td>
            <td>-8.445338</td>
            <td>0.174595</td>
          </tr>
          <tr>
            <th>54</th>
            <td>modibo maiga</td>
            <td>108</td>
            <td>20.0</td>
            <td>11.561715</td>
            <td>-8.438285</td>
            <td>0.107053</td>
          </tr>
          <tr>
            <th>55</th>
            <td>dries mertens</td>
            <td>270</td>
            <td>34.0</td>
            <td>25.630041</td>
            <td>-8.369959</td>
            <td>0.094926</td>
          </tr>
          <tr>
            <th>56</th>
            <td>pablo piatti</td>
            <td>140</td>
            <td>21.0</td>
            <td>12.904694</td>
            <td>-8.095306</td>
            <td>0.092176</td>
          </tr>
          <tr>
            <th>57</th>
            <td>bernardo silva</td>
            <td>105</td>
            <td>20.0</td>
            <td>11.943886</td>
            <td>-8.056114</td>
            <td>0.113751</td>
          </tr>
          <tr>
            <th>58</th>
            <td>maxwell</td>
            <td>53</td>
            <td>14.0</td>
            <td>6.043775</td>
            <td>-7.956225</td>
            <td>0.114033</td>
          </tr>
          <tr>
            <th>59</th>
            <td>mario gomez</td>
            <td>221</td>
            <td>48.0</td>
            <td>40.046813</td>
            <td>-7.953187</td>
            <td>0.181207</td>
          </tr>
          <tr>
            <th>60</th>
            <td>nolito</td>
            <td>320</td>
            <td>46.0</td>
            <td>38.199907</td>
            <td>-7.800093</td>
            <td>0.119375</td>
          </tr>
          <tr>
            <th>61</th>
            <td>ruben castro</td>
            <td>415</td>
            <td>69.0</td>
            <td>61.339920</td>
            <td>-7.660080</td>
            <td>0.147807</td>
          </tr>
          <tr>
            <th>62</th>
            <td>andrepierre gignac</td>
            <td>409</td>
            <td>51.0</td>
            <td>43.391474</td>
            <td>-7.608526</td>
            <td>0.106092</td>
          </tr>
          <tr>
            <th>63</th>
            <td>jacheol koo</td>
            <td>120</td>
            <td>20.0</td>
            <td>12.526796</td>
            <td>-7.473204</td>
            <td>0.104390</td>
          </tr>
          <tr>
            <th>64</th>
            <td>sergio aguero</td>
            <td>416</td>
            <td>75.0</td>
            <td>67.555521</td>
            <td>-7.444479</td>
            <td>0.162393</td>
          </tr>
          <tr>
            <th>65</th>
            <td>dario cvitanich</td>
            <td>116</td>
            <td>30.0</td>
            <td>22.702182</td>
            <td>-7.297818</td>
            <td>0.195708</td>
          </tr>
          <tr>
            <th>66</th>
            <td>jose callejon</td>
            <td>319</td>
            <td>48.0</td>
            <td>40.741845</td>
            <td>-7.258155</td>
            <td>0.127717</td>
          </tr>
          <tr>
            <th>67</th>
            <td>marco sau</td>
            <td>137</td>
            <td>28.0</td>
            <td>20.810726</td>
            <td>-7.189274</td>
            <td>0.151903</td>
          </tr>
          <tr>
            <th>68</th>
            <td>daniel didavi</td>
            <td>196</td>
            <td>27.0</td>
            <td>19.826556</td>
            <td>-7.173444</td>
            <td>0.101156</td>
          </tr>
          <tr>
            <th>69</th>
            <td>max kruse</td>
            <td>280</td>
            <td>40.0</td>
            <td>32.902116</td>
            <td>-7.097884</td>
            <td>0.117508</td>
          </tr>
          <tr>
            <th>70</th>
            <td>domenico berardi</td>
            <td>287</td>
            <td>40.0</td>
            <td>32.917630</td>
            <td>-7.082370</td>
            <td>0.114696</td>
          </tr>
          <tr>
            <th>71</th>
            <td>dele alli</td>
            <td>125</td>
            <td>21.0</td>
            <td>14.003370</td>
            <td>-6.996630</td>
            <td>0.112027</td>
          </tr>
          <tr>
            <th>72</th>
            <td>jese</td>
            <td>59</td>
            <td>14.0</td>
            <td>7.014941</td>
            <td>-6.985059</td>
            <td>0.118897</td>
          </tr>
          <tr>
            <th>73</th>
            <td>stefan kiessling</td>
            <td>359</td>
            <td>67.0</td>
            <td>60.079123</td>
            <td>-6.920877</td>
            <td>0.167351</td>
          </tr>
          <tr>
            <th>74</th>
            <td>francesc fabregas</td>
            <td>140</td>
            <td>27.0</td>
            <td>20.123383</td>
            <td>-6.876617</td>
            <td>0.143738</td>
          </tr>
          <tr>
            <th>75</th>
            <td>nicola sansone</td>
            <td>245</td>
            <td>32.0</td>
            <td>25.178835</td>
            <td>-6.821165</td>
            <td>0.102771</td>
          </tr>
          <tr>
            <th>76</th>
            <td>daniel sturridge</td>
            <td>196</td>
            <td>31.0</td>
            <td>24.208198</td>
            <td>-6.791802</td>
            <td>0.123511</td>
          </tr>
          <tr>
            <th>77</th>
            <td>ousmane dembele</td>
            <td>73</td>
            <td>16.0</td>
            <td>9.228357</td>
            <td>-6.771643</td>
            <td>0.126416</td>
          </tr>
          <tr>
            <th>78</th>
            <td>manolo gabbiadini</td>
            <td>330</td>
            <td>38.0</td>
            <td>31.286191</td>
            <td>-6.713809</td>
            <td>0.094807</td>
          </tr>
          <tr>
            <th>79</th>
            <td>yoann gourcuff</td>
            <td>119</td>
            <td>16.0</td>
            <td>9.324299</td>
            <td>-6.675701</td>
            <td>0.078355</td>
          </tr>
          <tr>
            <th>80</th>
            <td>shinji kagawa</td>
            <td>151</td>
            <td>25.0</td>
            <td>18.356041</td>
            <td>-6.643959</td>
            <td>0.121563</td>
          </tr>
          <tr>
            <th>81</th>
            <td>gregory pujol</td>
            <td>121</td>
            <td>20.0</td>
            <td>13.401306</td>
            <td>-6.598694</td>
            <td>0.110755</td>
          </tr>
          <tr>
            <th>82</th>
            <td>benjamin moukandjo</td>
            <td>203</td>
            <td>37.0</td>
            <td>30.508221</td>
            <td>-6.491779</td>
            <td>0.150287</td>
          </tr>
          <tr>
            <th>83</th>
            <td>anthony martial</td>
            <td>143</td>
            <td>24.0</td>
            <td>17.659621</td>
            <td>-6.340379</td>
            <td>0.123494</td>
          </tr>
          <tr>
            <th>84</th>
            <td>lukas podolski</td>
            <td>148</td>
            <td>22.0</td>
            <td>15.662317</td>
            <td>-6.337683</td>
            <td>0.105826</td>
          </tr>
          <tr>
            <th>85</th>
            <td>adam lallana</td>
            <td>180</td>
            <td>24.0</td>
            <td>17.696279</td>
            <td>-6.303721</td>
            <td>0.098313</td>
          </tr>
          <tr>
            <th>86</th>
            <td>mevlut erdinc</td>
            <td>290</td>
            <td>44.0</td>
            <td>37.732196</td>
            <td>-6.267804</td>
            <td>0.130111</td>
          </tr>
          <tr>
            <th>87</th>
            <td>alvaro morata</td>
            <td>166</td>
            <td>28.0</td>
            <td>21.733428</td>
            <td>-6.266572</td>
            <td>0.130924</td>
          </tr>
          <tr>
            <th>88</th>
            <td>bojan</td>
            <td>158</td>
            <td>24.0</td>
            <td>17.774814</td>
            <td>-6.225186</td>
            <td>0.112499</td>
          </tr>
          <tr>
            <th>89</th>
            <td>felipe anderson</td>
            <td>165</td>
            <td>19.0</td>
            <td>12.852658</td>
            <td>-6.147342</td>
            <td>0.077895</td>
          </tr>
          <tr>
            <th>90</th>
            <td>maximilian arnold</td>
            <td>148</td>
            <td>17.0</td>
            <td>10.862959</td>
            <td>-6.137041</td>
            <td>0.073398</td>
          </tr>
          <tr>
            <th>91</th>
            <td>alberto gilardino</td>
            <td>235</td>
            <td>47.0</td>
            <td>40.876697</td>
            <td>-6.123303</td>
            <td>0.173943</td>
          </tr>
          <tr>
            <th>92</th>
            <td>stevan jovetic</td>
            <td>351</td>
            <td>41.0</td>
            <td>34.951424</td>
            <td>-6.048576</td>
            <td>0.099577</td>
          </tr>
          <tr>
            <th>93</th>
            <td>son heungmin</td>
            <td>102</td>
            <td>16.0</td>
            <td>10.047432</td>
            <td>-5.952568</td>
            <td>0.098504</td>
          </tr>
          <tr>
            <th>94</th>
            <td>martin harnik</td>
            <td>235</td>
            <td>40.0</td>
            <td>34.053115</td>
            <td>-5.946885</td>
            <td>0.144907</td>
          </tr>
          <tr>
            <th>95</th>
            <td>ivica olic</td>
            <td>188</td>
            <td>31.0</td>
            <td>25.166751</td>
            <td>-5.833249</td>
            <td>0.133866</td>
          </tr>
          <tr>
            <th>96</th>
            <td>hatem ben arfa</td>
            <td>128</td>
            <td>18.0</td>
            <td>12.195448</td>
            <td>-5.804552</td>
            <td>0.095277</td>
          </tr>
          <tr>
            <th>97</th>
            <td>xavi</td>
            <td>123</td>
            <td>18.0</td>
            <td>12.212120</td>
            <td>-5.787880</td>
            <td>0.099286</td>
          </tr>
          <tr>
            <th>98</th>
            <td>luca rigoni</td>
            <td>136</td>
            <td>22.0</td>
            <td>16.300859</td>
            <td>-5.699141</td>
            <td>0.119859</td>
          </tr>
          <tr>
            <th>99</th>
            <td>florian thauvin</td>
            <td>283</td>
            <td>31.0</td>
            <td>25.312982</td>
            <td>-5.687018</td>
            <td>0.089445</td>
          </tr>
          <tr>
            <th>100</th>
            <td>suso</td>
            <td>160</td>
            <td>14.0</td>
            <td>8.405002</td>
            <td>-5.594998</td>
            <td>0.052531</td>
          </tr>
        </tbody>
      </table>
    );
  }
}
export default XG1;
