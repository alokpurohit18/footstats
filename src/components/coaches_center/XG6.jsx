import * as React from "react";
import "antd/dist/antd.css";
import "./XG.scss";

class XG6 extends React.Component {
  render() {
    return (
      <table className="dataframe league-table worst">
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
            <td>tom huddlestone</td>
            <td>108</td>
            <td>2.0</td>
            <td>3.801665</td>
            <td>1.801665</td>
            <td>0.035201</td>
          </tr>
          <tr>
            <th>1</th>
            <td>gokhan inler</td>
            <td>185</td>
            <td>9.0</td>
            <td>7.333342</td>
            <td>-1.666658</td>
            <td>0.039640</td>
          </tr>
          <tr>
            <th>2</th>
            <td>florent balmont</td>
            <td>168</td>
            <td>5.0</td>
            <td>7.122417</td>
            <td>2.122417</td>
            <td>0.042395</td>
          </tr>
          <tr>
            <th>3</th>
            <td>ivan radovanovic</td>
            <td>161</td>
            <td>2.0</td>
            <td>7.569230</td>
            <td>5.569230</td>
            <td>0.047014</td>
          </tr>
          <tr>
            <th>4</th>
            <td>saphir taider</td>
            <td>102</td>
            <td>4.0</td>
            <td>4.932113</td>
            <td>0.932113</td>
            <td>0.048354</td>
          </tr>
          <tr>
            <th>5</th>
            <td>ruben rochina</td>
            <td>179</td>
            <td>12.0</td>
            <td>8.727522</td>
            <td>-3.272478</td>
            <td>0.048757</td>
          </tr>
          <tr>
            <th>6</th>
            <td>daniel baier</td>
            <td>177</td>
            <td>5.0</td>
            <td>8.670070</td>
            <td>3.670070</td>
            <td>0.048983</td>
          </tr>
          <tr>
            <th>7</th>
            <td>michael pereira</td>
            <td>101</td>
            <td>3.0</td>
            <td>4.961315</td>
            <td>1.961315</td>
            <td>0.049122</td>
          </tr>
          <tr>
            <th>8</th>
            <td>marco estrada</td>
            <td>106</td>
            <td>6.0</td>
            <td>5.324807</td>
            <td>-0.675193</td>
            <td>0.050234</td>
          </tr>
          <tr>
            <th>9</th>
            <td>gregory sertic</td>
            <td>148</td>
            <td>5.0</td>
            <td>7.485724</td>
            <td>2.485724</td>
            <td>0.050579</td>
          </tr>
          <tr>
            <th>10</th>
            <td>marcel schmelzer</td>
            <td>135</td>
            <td>2.0</td>
            <td>6.883636</td>
            <td>4.883636</td>
            <td>0.050990</td>
          </tr>
          <tr>
            <th>11</th>
            <td>milan badelj</td>
            <td>102</td>
            <td>6.0</td>
            <td>5.217673</td>
            <td>-0.782327</td>
            <td>0.051154</td>
          </tr>
          <tr>
            <th>12</th>
            <td>paul lasne</td>
            <td>121</td>
            <td>8.0</td>
            <td>6.198490</td>
            <td>-1.801510</td>
            <td>0.051227</td>
          </tr>
          <tr>
            <th>13</th>
            <td>ruben pardo</td>
            <td>102</td>
            <td>5.0</td>
            <td>5.319500</td>
            <td>0.319500</td>
            <td>0.052152</td>
          </tr>
          <tr>
            <th>14</th>
            <td>bebe</td>
            <td>146</td>
            <td>5.0</td>
            <td>7.643569</td>
            <td>2.643569</td>
            <td>0.052353</td>
          </tr>
          <tr>
            <th>15</th>
            <td>suso</td>
            <td>160</td>
            <td>14.0</td>
            <td>8.405002</td>
            <td>-5.594998</td>
            <td>0.052531</td>
          </tr>
          <tr>
            <th>16</th>
            <td>fabien lemoine</td>
            <td>116</td>
            <td>5.0</td>
            <td>6.166675</td>
            <td>1.166675</td>
            <td>0.053161</td>
          </tr>
          <tr>
            <th>17</th>
            <td>johannes geis</td>
            <td>189</td>
            <td>8.0</td>
            <td>10.109328</td>
            <td>2.109328</td>
            <td>0.053489</td>
          </tr>
          <tr>
            <th>18</th>
            <td>tino costa</td>
            <td>147</td>
            <td>8.0</td>
            <td>8.027179</td>
            <td>0.027179</td>
            <td>0.054607</td>
          </tr>
          <tr>
            <th>19</th>
            <td>perparim hetemaj</td>
            <td>139</td>
            <td>1.0</td>
            <td>7.626188</td>
            <td>6.626188</td>
            <td>0.054865</td>
          </tr>
          <tr>
            <th>20</th>
            <td>marcel risse</td>
            <td>158</td>
            <td>12.0</td>
            <td>8.710838</td>
            <td>-3.289162</td>
            <td>0.055132</td>
          </tr>
          <tr>
            <th>21</th>
            <td>lossemy karaboue</td>
            <td>105</td>
            <td>2.0</td>
            <td>5.806428</td>
            <td>3.806428</td>
            <td>0.055299</td>
          </tr>
          <tr>
            <th>22</th>
            <td>riccardo montolivo</td>
            <td>195</td>
            <td>11.0</td>
            <td>10.799163</td>
            <td>-0.200837</td>
            <td>0.055380</td>
          </tr>
          <tr>
            <th>23</th>
            <td>granit xhaka</td>
            <td>158</td>
            <td>7.0</td>
            <td>8.882076</td>
            <td>1.882076</td>
            <td>0.056216</td>
          </tr>
          <tr>
            <th>24</th>
            <td>luca cigarini</td>
            <td>187</td>
            <td>7.0</td>
            <td>10.747968</td>
            <td>3.747968</td>
            <td>0.057476</td>
          </tr>
          <tr>
            <th>25</th>
            <td>bakary sako</td>
            <td>136</td>
            <td>6.0</td>
            <td>7.904307</td>
            <td>1.904307</td>
            <td>0.058120</td>
          </tr>
          <tr>
            <th>26</th>
            <td>idrissa gueye</td>
            <td>120</td>
            <td>4.0</td>
            <td>7.057758</td>
            <td>3.057758</td>
            <td>0.058815</td>
          </tr>
          <tr>
            <th>27</th>
            <td>alfred duncan</td>
            <td>104</td>
            <td>2.0</td>
            <td>6.126429</td>
            <td>4.126429</td>
            <td>0.058908</td>
          </tr>
          <tr>
            <th>28</th>
            <td>andros townsend</td>
            <td>117</td>
            <td>8.0</td>
            <td>6.900839</td>
            <td>-1.099161</td>
            <td>0.058982</td>
          </tr>
          <tr>
            <th>29</th>
            <td>sebastian rudy</td>
            <td>104</td>
            <td>8.0</td>
            <td>6.153365</td>
            <td>-1.846635</td>
            <td>0.059167</td>
          </tr>
          <tr>
            <th>30</th>
            <td>recio</td>
            <td>110</td>
            <td>5.0</td>
            <td>6.522439</td>
            <td>1.522439</td>
            <td>0.059295</td>
          </tr>
          <tr>
            <th>31</th>
            <td>pape diop</td>
            <td>134</td>
            <td>8.0</td>
            <td>7.955311</td>
            <td>-0.044689</td>
            <td>0.059368</td>
          </tr>
          <tr>
            <th>32</th>
            <td>chris brunt</td>
            <td>113</td>
            <td>8.0</td>
            <td>6.719354</td>
            <td>-1.280646</td>
            <td>0.059463</td>
          </tr>
          <tr>
            <th>33</th>
            <td>matias vecino</td>
            <td>137</td>
            <td>4.0</td>
            <td>8.238430</td>
            <td>4.238430</td>
            <td>0.060135</td>
          </tr>
          <tr>
            <th>34</th>
            <td>fredy guarin</td>
            <td>312</td>
            <td>15.0</td>
            <td>18.803511</td>
            <td>3.803511</td>
            <td>0.060268</td>
          </tr>
          <tr>
            <th>35</th>
            <td>ander</td>
            <td>158</td>
            <td>7.0</td>
            <td>9.574583</td>
            <td>2.574583</td>
            <td>0.060599</td>
          </tr>
          <tr>
            <th>36</th>
            <td>dani alves</td>
            <td>140</td>
            <td>5.0</td>
            <td>8.509612</td>
            <td>3.509612</td>
            <td>0.060783</td>
          </tr>
          <tr>
            <th>37</th>
            <td>michael krohndehli</td>
            <td>154</td>
            <td>3.0</td>
            <td>9.384587</td>
            <td>6.384587</td>
            <td>0.060939</td>
          </tr>
          <tr>
            <th>38</th>
            <td>jonjo shelvey</td>
            <td>187</td>
            <td>10.0</td>
            <td>11.416929</td>
            <td>1.416929</td>
            <td>0.061053</td>
          </tr>
          <tr>
            <th>39</th>
            <td>sergio canales</td>
            <td>158</td>
            <td>9.0</td>
            <td>9.802688</td>
            <td>0.802688</td>
            <td>0.062042</td>
          </tr>
          <tr>
            <th>40</th>
            <td>adrien regattin</td>
            <td>150</td>
            <td>8.0</td>
            <td>9.341698</td>
            <td>1.341698</td>
            <td>0.062278</td>
          </tr>
          <tr>
            <th>41</th>
            <td>lazaros christodoulopoulos</td>
            <td>117</td>
            <td>5.0</td>
            <td>7.423294</td>
            <td>2.423294</td>
            <td>0.063447</td>
          </tr>
          <tr>
            <th>42</th>
            <td>konstantin rausch</td>
            <td>122</td>
            <td>8.0</td>
            <td>7.764728</td>
            <td>-0.235272</td>
            <td>0.063645</td>
          </tr>
          <tr>
            <th>43</th>
            <td>vieirinha</td>
            <td>126</td>
            <td>4.0</td>
            <td>8.048631</td>
            <td>4.048631</td>
            <td>0.063878</td>
          </tr>
          <tr>
            <th>44</th>
            <td>gary medel</td>
            <td>114</td>
            <td>9.0</td>
            <td>7.299124</td>
            <td>-1.700876</td>
            <td>0.064027</td>
          </tr>
          <tr>
            <th>45</th>
            <td>gabi</td>
            <td>150</td>
            <td>8.0</td>
            <td>9.781902</td>
            <td>1.781902</td>
            <td>0.065213</td>
          </tr>
          <tr>
            <th>46</th>
            <td>toni kroos</td>
            <td>210</td>
            <td>15.0</td>
            <td>13.702728</td>
            <td>-1.297272</td>
            <td>0.065251</td>
          </tr>
          <tr>
            <th>47</th>
            <td>radja nainggolan</td>
            <td>396</td>
            <td>22.0</td>
            <td>25.913369</td>
            <td>3.913369</td>
            <td>0.065438</td>
          </tr>
          <tr>
            <th>48</th>
            <td>antoine devaux</td>
            <td>104</td>
            <td>6.0</td>
            <td>6.883990</td>
            <td>0.883990</td>
            <td>0.066192</td>
          </tr>
          <tr>
            <th>49</th>
            <td>luka modric</td>
            <td>129</td>
            <td>8.0</td>
            <td>8.583159</td>
            <td>0.583159</td>
            <td>0.066536</td>
          </tr>
          <tr>
            <th>50</th>
            <td>manu trigueros</td>
            <td>125</td>
            <td>7.0</td>
            <td>8.369612</td>
            <td>1.369612</td>
            <td>0.066957</td>
          </tr>
          <tr>
            <th>51</th>
            <td>mauro zarate</td>
            <td>140</td>
            <td>12.0</td>
            <td>9.376992</td>
            <td>-2.623008</td>
            <td>0.066979</td>
          </tr>
          <tr>
            <th>52</th>
            <td>yann jouffre</td>
            <td>243</td>
            <td>17.0</td>
            <td>16.289337</td>
            <td>-0.710663</td>
            <td>0.067034</td>
          </tr>
          <tr>
            <th>53</th>
            <td>markus feulner</td>
            <td>137</td>
            <td>9.0</td>
            <td>9.189010</td>
            <td>0.189010</td>
            <td>0.067073</td>
          </tr>
          <tr>
            <th>54</th>
            <td>johan cavalli</td>
            <td>108</td>
            <td>7.0</td>
            <td>7.261248</td>
            <td>0.261248</td>
            <td>0.067234</td>
          </tr>
          <tr>
            <th>55</th>
            <td>alessandro diamanti</td>
            <td>386</td>
            <td>21.0</td>
            <td>25.969401</td>
            <td>4.969401</td>
            <td>0.067278</td>
          </tr>
          <tr>
            <th>56</th>
            <td>dusan basta</td>
            <td>148</td>
            <td>9.0</td>
            <td>10.046783</td>
            <td>1.046783</td>
            <td>0.067884</td>
          </tr>
          <tr>
            <th>57</th>
            <td>nathan redmond</td>
            <td>159</td>
            <td>9.0</td>
            <td>10.869577</td>
            <td>1.869577</td>
            <td>0.068362</td>
          </tr>
          <tr>
            <th>58</th>
            <td>panagiotis tachtsidis</td>
            <td>112</td>
            <td>9.0</td>
            <td>7.656952</td>
            <td>-1.343048</td>
            <td>0.068366</td>
          </tr>
          <tr>
            <th>59</th>
            <td>jasmin kurtic</td>
            <td>207</td>
            <td>9.0</td>
            <td>14.198862</td>
            <td>5.198862</td>
            <td>0.068594</td>
          </tr>
          <tr>
            <th>60</th>
            <td>yannis salibur</td>
            <td>120</td>
            <td>12.0</td>
            <td>8.250579</td>
            <td>-3.749421</td>
            <td>0.068755</td>
          </tr>
          <tr>
            <th>61</th>
            <td>juan vargas</td>
            <td>135</td>
            <td>7.0</td>
            <td>9.300796</td>
            <td>2.300796</td>
            <td>0.068895</td>
          </tr>
          <tr>
            <th>62</th>
            <td>piotr zielinski</td>
            <td>115</td>
            <td>6.0</td>
            <td>7.959403</td>
            <td>1.959403</td>
            <td>0.069212</td>
          </tr>
          <tr>
            <th>63</th>
            <td>jose antonio reyes</td>
            <td>112</td>
            <td>5.0</td>
            <td>7.767890</td>
            <td>2.767890</td>
            <td>0.069356</td>
          </tr>
          <tr>
            <th>64</th>
            <td>carlos sanchez</td>
            <td>124</td>
            <td>4.0</td>
            <td>8.603782</td>
            <td>4.603782</td>
            <td>0.069385</td>
          </tr>
          <tr>
            <th>65</th>
            <td>sergio almiron</td>
            <td>121</td>
            <td>9.0</td>
            <td>8.470118</td>
            <td>-0.529882</td>
            <td>0.070001</td>
          </tr>
          <tr>
            <th>66</th>
            <td>roberto trashorras</td>
            <td>214</td>
            <td>6.0</td>
            <td>15.005265</td>
            <td>9.005265</td>
            <td>0.070118</td>
          </tr>
          <tr>
            <th>67</th>
            <td>edgar barreto</td>
            <td>131</td>
            <td>5.0</td>
            <td>9.223236</td>
            <td>4.223236</td>
            <td>0.070406</td>
          </tr>
          <tr>
            <th>68</th>
            <td>juanfran</td>
            <td>155</td>
            <td>7.0</td>
            <td>10.946801</td>
            <td>3.946801</td>
            <td>0.070625</td>
          </tr>
          <tr>
            <th>69</th>
            <td>jaroslav plasil</td>
            <td>166</td>
            <td>9.0</td>
            <td>11.731898</td>
            <td>2.731898</td>
            <td>0.070674</td>
          </tr>
          <tr>
            <th>70</th>
            <td>alain traore</td>
            <td>165</td>
            <td>17.0</td>
            <td>11.704467</td>
            <td>-5.295533</td>
            <td>0.070936</td>
          </tr>
          <tr>
            <th>71</th>
            <td>stewart downing</td>
            <td>129</td>
            <td>8.0</td>
            <td>9.160402</td>
            <td>1.160402</td>
            <td>0.071011</td>
          </tr>
          <tr>
            <th>72</th>
            <td>alvaro cejudo</td>
            <td>212</td>
            <td>11.0</td>
            <td>15.061212</td>
            <td>4.061212</td>
            <td>0.071043</td>
          </tr>
          <tr>
            <th>73</th>
            <td>hernanes</td>
            <td>354</td>
            <td>28.0</td>
            <td>25.299641</td>
            <td>-2.700359</td>
            <td>0.071468</td>
          </tr>
          <tr>
            <th>74</th>
            <td>joao moutinho</td>
            <td>116</td>
            <td>7.0</td>
            <td>8.324246</td>
            <td>1.324246</td>
            <td>0.071761</td>
          </tr>
          <tr>
            <th>75</th>
            <td>manuel pasqual</td>
            <td>101</td>
            <td>5.0</td>
            <td>7.261687</td>
            <td>2.261687</td>
            <td>0.071898</td>
          </tr>
          <tr>
            <th>76</th>
            <td>yannick bolasie</td>
            <td>199</td>
            <td>10.0</td>
            <td>14.331303</td>
            <td>4.331303</td>
            <td>0.072017</td>
          </tr>
          <tr>
            <th>77</th>
            <td>benoit cheyrou</td>
            <td>116</td>
            <td>8.0</td>
            <td>8.354627</td>
            <td>0.354627</td>
            <td>0.072023</td>
          </tr>
          <tr>
            <th>78</th>
            <td>ricardo alvarez</td>
            <td>165</td>
            <td>12.0</td>
            <td>11.889103</td>
            <td>-0.110897</td>
            <td>0.072055</td>
          </tr>
          <tr>
            <th>79</th>
            <td>valentin eysseric</td>
            <td>217</td>
            <td>16.0</td>
            <td>15.656669</td>
            <td>-0.343331</td>
            <td>0.072151</td>
          </tr>
          <tr>
            <th>80</th>
            <td>alexander esswein</td>
            <td>188</td>
            <td>12.0</td>
            <td>13.565030</td>
            <td>1.565030</td>
            <td>0.072154</td>
          </tr>
          <tr>
            <th>81</th>
            <td>salif sane</td>
            <td>121</td>
            <td>10.0</td>
            <td>8.806639</td>
            <td>-1.193361</td>
            <td>0.072782</td>
          </tr>
          <tr>
            <th>82</th>
            <td>sebastien corchia</td>
            <td>133</td>
            <td>8.0</td>
            <td>9.696714</td>
            <td>1.696714</td>
            <td>0.072908</td>
          </tr>
          <tr>
            <th>83</th>
            <td>marcell jansen</td>
            <td>119</td>
            <td>8.0</td>
            <td>8.701326</td>
            <td>0.701326</td>
            <td>0.073120</td>
          </tr>
          <tr>
            <th>84</th>
            <td>franck tabanou</td>
            <td>217</td>
            <td>11.0</td>
            <td>15.899567</td>
            <td>4.899567</td>
            <td>0.073270</td>
          </tr>
          <tr>
            <th>85</th>
            <td>maximilian arnold</td>
            <td>148</td>
            <td>17.0</td>
            <td>10.862959</td>
            <td>-6.137041</td>
            <td>0.073398</td>
          </tr>
          <tr>
            <th>86</th>
            <td>carlos carmona</td>
            <td>105</td>
            <td>12.0</td>
            <td>7.712154</td>
            <td>-4.287846</td>
            <td>0.073449</td>
          </tr>
          <tr>
            <th>87</th>
            <td>andrea cossu</td>
            <td>103</td>
            <td>3.0</td>
            <td>7.570746</td>
            <td>4.570746</td>
            <td>0.073502</td>
          </tr>
          <tr>
            <th>88</th>
            <td>charlie adam</td>
            <td>160</td>
            <td>16.0</td>
            <td>11.765430</td>
            <td>-4.234570</td>
            <td>0.073534</td>
          </tr>
          <tr>
            <th>89</th>
            <td>morgan sanson</td>
            <td>124</td>
            <td>13.0</td>
            <td>9.126769</td>
            <td>-3.873231</td>
            <td>0.073603</td>
          </tr>
          <tr>
            <th>90</th>
            <td>geoffrey kondogbia</td>
            <td>119</td>
            <td>5.0</td>
            <td>8.878129</td>
            <td>3.878129</td>
            <td>0.074606</td>
          </tr>
          <tr>
            <th>91</th>
            <td>dimitri payet</td>
            <td>456</td>
            <td>44.0</td>
            <td>34.123482</td>
            <td>-9.876518</td>
            <td>0.074832</td>
          </tr>
          <tr>
            <th>92</th>
            <td>angel di maria</td>
            <td>347</td>
            <td>30.0</td>
            <td>26.156045</td>
            <td>-3.843955</td>
            <td>0.075378</td>
          </tr>
          <tr>
            <th>93</th>
            <td>marco benassi</td>
            <td>139</td>
            <td>13.0</td>
            <td>10.532425</td>
            <td>-2.467575</td>
            <td>0.075773</td>
          </tr>
          <tr>
            <th>94</th>
            <td>daniele baselli</td>
            <td>103</td>
            <td>10.0</td>
            <td>7.817116</td>
            <td>-2.182884</td>
            <td>0.075894</td>
          </tr>
          <tr>
            <th>95</th>
            <td>ibai gomez</td>
            <td>193</td>
            <td>15.0</td>
            <td>14.648133</td>
            <td>-0.351867</td>
            <td>0.075897</td>
          </tr>
          <tr>
            <th>96</th>
            <td>victor rodriguez</td>
            <td>139</td>
            <td>8.0</td>
            <td>10.561782</td>
            <td>2.561782</td>
            <td>0.075984</td>
          </tr>
          <tr>
            <th>97</th>
            <td>blerim dzemaili</td>
            <td>197</td>
            <td>24.0</td>
            <td>14.977664</td>
            <td>-9.022336</td>
            <td>0.076029</td>
          </tr>
          <tr>
            <th>98</th>
            <td>raphael guerreiro</td>
            <td>127</td>
            <td>12.0</td>
            <td>9.701845</td>
            <td>-2.298155</td>
            <td>0.076392</td>
          </tr>
          <tr>
            <th>99</th>
            <td>juan arango</td>
            <td>231</td>
            <td>17.0</td>
            <td>17.684023</td>
            <td>0.684023</td>
            <td>0.076554</td>
          </tr>
          <tr>
            <th>100</th>
            <td>ronny rodelin</td>
            <td>233</td>
            <td>19.0</td>
            <td>17.867604</td>
            <td>-1.132396</td>
            <td>0.076685</td>
          </tr>
        </tbody>
      </table>
    );
  }
}
export default XG6;
