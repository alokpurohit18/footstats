import * as React from "react";
import "antd/dist/antd.css";
import "./XG.scss";

class XG2 extends React.Component {
  render() {
    return (
      <table className="dataframe league-table high-xg">
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
            <td>cristiano ronaldo</td>
            <td>1190</td>
            <td>198.0</td>
            <td>172.517022</td>
            <td>-25.482978</td>
            <td>0.144972</td>
          </tr>
          <tr>
            <th>1</th>
            <td>lionel messi</td>
            <td>914</td>
            <td>205.0</td>
            <td>147.785301</td>
            <td>-57.214699</td>
            <td>0.161691</td>
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
            <td>edinson cavani</td>
            <td>623</td>
            <td>121.0</td>
            <td>118.256201</td>
            <td>-2.743799</td>
            <td>0.189817</td>
          </tr>
          <tr>
            <th>4</th>
            <td>robert lewandowski</td>
            <td>633</td>
            <td>124.0</td>
            <td>99.958186</td>
            <td>-24.041814</td>
            <td>0.157912</td>
          </tr>
          <tr>
            <th>5</th>
            <td>pierreemerick aubameyang</td>
            <td>580</td>
            <td>100.0</td>
            <td>91.229665</td>
            <td>-8.770335</td>
            <td>0.157293</td>
          </tr>
          <tr>
            <th>6</th>
            <td>gonzalo higuain</td>
            <td>552</td>
            <td>118.0</td>
            <td>89.582126</td>
            <td>-28.417874</td>
            <td>0.162286</td>
          </tr>
          <tr>
            <th>7</th>
            <td>antonio di natale</td>
            <td>515</td>
            <td>76.0</td>
            <td>79.711294</td>
            <td>3.711294</td>
            <td>0.154779</td>
          </tr>
          <tr>
            <th>8</th>
            <td>diego costa</td>
            <td>410</td>
            <td>93.0</td>
            <td>75.104347</td>
            <td>-17.895653</td>
            <td>0.183181</td>
          </tr>
          <tr>
            <th>9</th>
            <td>falcao</td>
            <td>381</td>
            <td>80.0</td>
            <td>70.178498</td>
            <td>-9.821502</td>
            <td>0.184196</td>
          </tr>
          <tr>
            <th>10</th>
            <td>bafetimbi gomis</td>
            <td>458</td>
            <td>66.0</td>
            <td>68.845026</td>
            <td>2.845026</td>
            <td>0.150317</td>
          </tr>
          <tr>
            <th>11</th>
            <td>sergio aguero</td>
            <td>416</td>
            <td>75.0</td>
            <td>67.555521</td>
            <td>-7.444479</td>
            <td>0.162393</td>
          </tr>
          <tr>
            <th>12</th>
            <td>luis suarez</td>
            <td>433</td>
            <td>96.0</td>
            <td>66.885136</td>
            <td>-29.114864</td>
            <td>0.154469</td>
          </tr>
          <tr>
            <th>13</th>
            <td>karim benzema</td>
            <td>434</td>
            <td>85.0</td>
            <td>65.942142</td>
            <td>-19.057858</td>
            <td>0.151940</td>
          </tr>
          <tr>
            <th>14</th>
            <td>alexandre lacazette</td>
            <td>391</td>
            <td>88.0</td>
            <td>65.477343</td>
            <td>-22.522657</td>
            <td>0.167461</td>
          </tr>
          <tr>
            <th>15</th>
            <td>klaasjan huntelaar</td>
            <td>370</td>
            <td>68.0</td>
            <td>64.487807</td>
            <td>-3.512193</td>
            <td>0.174291</td>
          </tr>
          <tr>
            <th>16</th>
            <td>alvaro negredo</td>
            <td>401</td>
            <td>61.0</td>
            <td>63.515052</td>
            <td>2.515052</td>
            <td>0.158392</td>
          </tr>
          <tr>
            <th>17</th>
            <td>anthony modeste</td>
            <td>393</td>
            <td>59.0</td>
            <td>62.955537</td>
            <td>3.955537</td>
            <td>0.160192</td>
          </tr>
          <tr>
            <th>18</th>
            <td>thomas muller</td>
            <td>390</td>
            <td>67.0</td>
            <td>62.455656</td>
            <td>-4.544344</td>
            <td>0.160143</td>
          </tr>
          <tr>
            <th>19</th>
            <td>kevin gameiro</td>
            <td>303</td>
            <td>63.0</td>
            <td>61.486777</td>
            <td>-1.513223</td>
            <td>0.202927</td>
          </tr>
          <tr>
            <th>20</th>
            <td>ruben castro</td>
            <td>415</td>
            <td>69.0</td>
            <td>61.339920</td>
            <td>-7.660080</td>
            <td>0.147807</td>
          </tr>
          <tr>
            <th>21</th>
            <td>alexis sanchez</td>
            <td>445</td>
            <td>80.0</td>
            <td>60.690420</td>
            <td>-19.309580</td>
            <td>0.136383</td>
          </tr>
          <tr>
            <th>22</th>
            <td>antoine griezmann</td>
            <td>493</td>
            <td>80.0</td>
            <td>60.674942</td>
            <td>-19.325058</td>
            <td>0.123073</td>
          </tr>
          <tr>
            <th>23</th>
            <td>stefan kiessling</td>
            <td>359</td>
            <td>67.0</td>
            <td>60.079123</td>
            <td>-6.920877</td>
            <td>0.167351</td>
          </tr>
          <tr>
            <th>24</th>
            <td>olivier giroud</td>
            <td>442</td>
            <td>71.0</td>
            <td>59.869051</td>
            <td>-11.130949</td>
            <td>0.135450</td>
          </tr>
          <tr>
            <th>25</th>
            <td>luca toni</td>
            <td>350</td>
            <td>56.0</td>
            <td>58.633116</td>
            <td>2.633116</td>
            <td>0.167523</td>
          </tr>
          <tr>
            <th>26</th>
            <td>german denis</td>
            <td>335</td>
            <td>56.0</td>
            <td>57.964245</td>
            <td>1.964245</td>
            <td>0.173028</td>
          </tr>
          <tr>
            <th>27</th>
            <td>mauro icardi</td>
            <td>323</td>
            <td>72.0</td>
            <td>57.785937</td>
            <td>-14.214063</td>
            <td>0.178904</td>
          </tr>
          <tr>
            <th>28</th>
            <td>eder</td>
            <td>457</td>
            <td>54.0</td>
            <td>56.393416</td>
            <td>2.393416</td>
            <td>0.123399</td>
          </tr>
          <tr>
            <th>29</th>
            <td>neymar</td>
            <td>318</td>
            <td>58.0</td>
            <td>54.490274</td>
            <td>-3.509726</td>
            <td>0.171353</td>
          </tr>
          <tr>
            <th>30</th>
            <td>wissam ben yedder</td>
            <td>367</td>
            <td>69.0</td>
            <td>54.078384</td>
            <td>-14.921616</td>
            <td>0.147353</td>
          </tr>
          <tr>
            <th>31</th>
            <td>rodrigo palacio</td>
            <td>297</td>
            <td>57.0</td>
            <td>53.862485</td>
            <td>-3.137515</td>
            <td>0.181355</td>
          </tr>
          <tr>
            <th>32</th>
            <td>harry kane</td>
            <td>353</td>
            <td>65.0</td>
            <td>52.556966</td>
            <td>-12.443034</td>
            <td>0.148887</td>
          </tr>
          <tr>
            <th>33</th>
            <td>antonio candreva</td>
            <td>556</td>
            <td>46.0</td>
            <td>51.169471</td>
            <td>5.169471</td>
            <td>0.092031</td>
          </tr>
          <tr>
            <th>34</th>
            <td>mario mandzukic</td>
            <td>329</td>
            <td>67.0</td>
            <td>51.158645</td>
            <td>-15.841355</td>
            <td>0.155497</td>
          </tr>
          <tr>
            <th>35</th>
            <td>vedad ibisevic</td>
            <td>293</td>
            <td>54.0</td>
            <td>51.122677</td>
            <td>-2.877323</td>
            <td>0.174480</td>
          </tr>
          <tr>
            <th>36</th>
            <td>roberto soldado</td>
            <td>278</td>
            <td>49.0</td>
            <td>50.733964</td>
            <td>1.733964</td>
            <td>0.182496</td>
          </tr>
          <tr>
            <th>37</th>
            <td>marco reus</td>
            <td>408</td>
            <td>65.0</td>
            <td>50.730262</td>
            <td>-14.269738</td>
            <td>0.124339</td>
          </tr>
          <tr>
            <th>38</th>
            <td>carlos vela</td>
            <td>404</td>
            <td>55.0</td>
            <td>50.592984</td>
            <td>-4.407016</td>
            <td>0.125230</td>
          </tr>
          <tr>
            <th>39</th>
            <td>aritz aduriz</td>
            <td>297</td>
            <td>53.0</td>
            <td>49.770600</td>
            <td>-3.229400</td>
            <td>0.167578</td>
          </tr>
          <tr>
            <th>40</th>
            <td>romelu lukaku</td>
            <td>366</td>
            <td>53.0</td>
            <td>49.335986</td>
            <td>-3.664014</td>
            <td>0.134798</td>
          </tr>
          <tr>
            <th>41</th>
            <td>cyril thereau</td>
            <td>365</td>
            <td>54.0</td>
            <td>49.307484</td>
            <td>-4.692516</td>
            <td>0.135089</td>
          </tr>
          <tr>
            <th>42</th>
            <td>mattia destro</td>
            <td>290</td>
            <td>51.0</td>
            <td>46.767520</td>
            <td>-4.232480</td>
            <td>0.161267</td>
          </tr>
          <tr>
            <th>43</th>
            <td>fabio quagliarella</td>
            <td>424</td>
            <td>39.0</td>
            <td>46.579807</td>
            <td>7.579807</td>
            <td>0.109858</td>
          </tr>
          <tr>
            <th>44</th>
            <td>mauricio pinilla</td>
            <td>280</td>
            <td>39.0</td>
            <td>46.525015</td>
            <td>7.525015</td>
            <td>0.166161</td>
          </tr>
          <tr>
            <th>45</th>
            <td>roberto firmino</td>
            <td>427</td>
            <td>50.0</td>
            <td>46.441664</td>
            <td>-3.558336</td>
            <td>0.108763</td>
          </tr>
          <tr>
            <th>46</th>
            <td>mario balotelli</td>
            <td>362</td>
            <td>36.0</td>
            <td>46.316562</td>
            <td>10.316562</td>
            <td>0.127946</td>
          </tr>
          <tr>
            <th>47</th>
            <td>ciro immobile</td>
            <td>334</td>
            <td>48.0</td>
            <td>46.114603</td>
            <td>-1.885397</td>
            <td>0.138068</td>
          </tr>
          <tr>
            <th>48</th>
            <td>carlos bacca</td>
            <td>230</td>
            <td>57.0</td>
            <td>46.001342</td>
            <td>-10.998658</td>
            <td>0.200006</td>
          </tr>
          <tr>
            <th>49</th>
            <td>edin dzeko</td>
            <td>318</td>
            <td>40.0</td>
            <td>45.948202</td>
            <td>5.948202</td>
            <td>0.144491</td>
          </tr>
          <tr>
            <th>50</th>
            <td>salomon kalou</td>
            <td>281</td>
            <td>56.0</td>
            <td>45.526441</td>
            <td>-10.473559</td>
            <td>0.162016</td>
          </tr>
          <tr>
            <th>51</th>
            <td>nolan roux</td>
            <td>361</td>
            <td>47.0</td>
            <td>45.400516</td>
            <td>-1.599484</td>
            <td>0.125763</td>
          </tr>
          <tr>
            <th>52</th>
            <td>eden hazard</td>
            <td>332</td>
            <td>62.0</td>
            <td>45.046184</td>
            <td>-16.953816</td>
            <td>0.135681</td>
          </tr>
          <tr>
            <th>53</th>
            <td>imanol agirretxe</td>
            <td>314</td>
            <td>48.0</td>
            <td>44.922394</td>
            <td>-3.077606</td>
            <td>0.143065</td>
          </tr>
          <tr>
            <th>54</th>
            <td>andre ayew</td>
            <td>340</td>
            <td>46.0</td>
            <td>43.728823</td>
            <td>-2.271177</td>
            <td>0.128614</td>
          </tr>
          <tr>
            <th>55</th>
            <td>youssef elarabi</td>
            <td>250</td>
            <td>42.0</td>
            <td>43.609415</td>
            <td>1.609415</td>
            <td>0.174438</td>
          </tr>
          <tr>
            <th>56</th>
            <td>alberto paloschi</td>
            <td>261</td>
            <td>44.0</td>
            <td>43.542934</td>
            <td>-0.457066</td>
            <td>0.166831</td>
          </tr>
          <tr>
            <th>57</th>
            <td>andrepierre gignac</td>
            <td>409</td>
            <td>51.0</td>
            <td>43.391474</td>
            <td>-7.608526</td>
            <td>0.106092</td>
          </tr>
          <tr>
            <th>58</th>
            <td>alexander meier</td>
            <td>291</td>
            <td>57.0</td>
            <td>43.291728</td>
            <td>-13.708272</td>
            <td>0.148769</td>
          </tr>
          <tr>
            <th>59</th>
            <td>marek hamsik</td>
            <td>412</td>
            <td>45.0</td>
            <td>42.630372</td>
            <td>-2.369628</td>
            <td>0.103472</td>
          </tr>
          <tr>
            <th>60</th>
            <td>fernando llorente</td>
            <td>282</td>
            <td>56.0</td>
            <td>41.342096</td>
            <td>-14.657904</td>
            <td>0.146603</td>
          </tr>
          <tr>
            <th>61</th>
            <td>giampaolo pazzini</td>
            <td>233</td>
            <td>31.0</td>
            <td>40.895021</td>
            <td>9.895021</td>
            <td>0.175515</td>
          </tr>
          <tr>
            <th>62</th>
            <td>alberto gilardino</td>
            <td>235</td>
            <td>47.0</td>
            <td>40.876697</td>
            <td>-6.123303</td>
            <td>0.173943</td>
          </tr>
          <tr>
            <th>63</th>
            <td>jose callejon</td>
            <td>319</td>
            <td>48.0</td>
            <td>40.741845</td>
            <td>-7.258155</td>
            <td>0.127717</td>
          </tr>
          <tr>
            <th>64</th>
            <td>mario gomez</td>
            <td>221</td>
            <td>48.0</td>
            <td>40.046813</td>
            <td>-7.953187</td>
            <td>0.181207</td>
          </tr>
          <tr>
            <th>65</th>
            <td>francesco totti</td>
            <td>369</td>
            <td>43.0</td>
            <td>39.573719</td>
            <td>-3.426281</td>
            <td>0.107246</td>
          </tr>
          <tr>
            <th>66</th>
            <td>martin braithwaite</td>
            <td>293</td>
            <td>30.0</td>
            <td>39.012934</td>
            <td>9.012934</td>
            <td>0.133150</td>
          </tr>
          <tr>
            <th>67</th>
            <td>andre schurrle</td>
            <td>374</td>
            <td>38.0</td>
            <td>38.859464</td>
            <td>0.859464</td>
            <td>0.103902</td>
          </tr>
          <tr>
            <th>68</th>
            <td>arjen robben</td>
            <td>343</td>
            <td>50.0</td>
            <td>38.828671</td>
            <td>-11.171329</td>
            <td>0.113203</td>
          </tr>
          <tr>
            <th>69</th>
            <td>raffael</td>
            <td>318</td>
            <td>50.0</td>
            <td>38.779334</td>
            <td>-11.220666</td>
            <td>0.121948</td>
          </tr>
          <tr>
            <th>70</th>
            <td>christian benteke</td>
            <td>243</td>
            <td>36.0</td>
            <td>38.511737</td>
            <td>2.511737</td>
            <td>0.158485</td>
          </tr>
          <tr>
            <th>71</th>
            <td>miroslav klose</td>
            <td>205</td>
            <td>51.0</td>
            <td>38.509038</td>
            <td>-12.490962</td>
            <td>0.187849</td>
          </tr>
          <tr>
            <th>72</th>
            <td>nolito</td>
            <td>320</td>
            <td>46.0</td>
            <td>38.199907</td>
            <td>-7.800093</td>
            <td>0.119375</td>
          </tr>
          <tr>
            <th>73</th>
            <td>raul garcia</td>
            <td>353</td>
            <td>39.0</td>
            <td>38.043375</td>
            <td>-0.956625</td>
            <td>0.107772</td>
          </tr>
          <tr>
            <th>74</th>
            <td>gonzalo bergessio</td>
            <td>281</td>
            <td>31.0</td>
            <td>37.966518</td>
            <td>6.966518</td>
            <td>0.135112</td>
          </tr>
          <tr>
            <th>75</th>
            <td>miralem pjanic</td>
            <td>330</td>
            <td>33.0</td>
            <td>37.752119</td>
            <td>4.752119</td>
            <td>0.114400</td>
          </tr>
          <tr>
            <th>76</th>
            <td>mevlut erdinc</td>
            <td>290</td>
            <td>44.0</td>
            <td>37.732196</td>
            <td>-6.267804</td>
            <td>0.130111</td>
          </tr>
          <tr>
            <th>77</th>
            <td>claudio pizarro</td>
            <td>200</td>
            <td>47.0</td>
            <td>37.665620</td>
            <td>-9.334380</td>
            <td>0.188328</td>
          </tr>
          <tr>
            <th>78</th>
            <td>paulo dybala</td>
            <td>288</td>
            <td>38.0</td>
            <td>37.131084</td>
            <td>-0.868916</td>
            <td>0.128927</td>
          </tr>
          <tr>
            <th>79</th>
            <td>shinji okazaki</td>
            <td>244</td>
            <td>37.0</td>
            <td>36.551749</td>
            <td>-0.448251</td>
            <td>0.149802</td>
          </tr>
          <tr>
            <th>80</th>
            <td>pedro</td>
            <td>267</td>
            <td>45.0</td>
            <td>36.443374</td>
            <td>-8.556626</td>
            <td>0.136492</td>
          </tr>
          <tr>
            <th>81</th>
            <td>wilfried bony</td>
            <td>263</td>
            <td>33.0</td>
            <td>36.014407</td>
            <td>3.014407</td>
            <td>0.136937</td>
          </tr>
          <tr>
            <th>82</th>
            <td>cheick diabate</td>
            <td>228</td>
            <td>47.0</td>
            <td>35.991931</td>
            <td>-11.008069</td>
            <td>0.157859</td>
          </tr>
          <tr>
            <th>83</th>
            <td>arturo vidal</td>
            <td>308</td>
            <td>40.0</td>
            <td>35.893067</td>
            <td>-4.106933</td>
            <td>0.116536</td>
          </tr>
          <tr>
            <th>84</th>
            <td>josip ilicic</td>
            <td>388</td>
            <td>39.0</td>
            <td>35.804286</td>
            <td>-3.195714</td>
            <td>0.092279</td>
          </tr>
          <tr>
            <th>85</th>
            <td>gareth bale</td>
            <td>301</td>
            <td>50.0</td>
            <td>35.786042</td>
            <td>-14.213958</td>
            <td>0.118891</td>
          </tr>
          <tr>
            <th>86</th>
            <td>javi guerra</td>
            <td>217</td>
            <td>40.0</td>
            <td>35.687307</td>
            <td>-4.312693</td>
            <td>0.164458</td>
          </tr>
          <tr>
            <th>87</th>
            <td>philippe coutinho</td>
            <td>406</td>
            <td>30.0</td>
            <td>35.663314</td>
            <td>5.663314</td>
            <td>0.087841</td>
          </tr>
          <tr>
            <th>88</th>
            <td>souleymane camara</td>
            <td>280</td>
            <td>33.0</td>
            <td>35.513463</td>
            <td>2.513463</td>
            <td>0.126834</td>
          </tr>
          <tr>
            <th>89</th>
            <td>alessandro matri</td>
            <td>208</td>
            <td>39.0</td>
            <td>35.152346</td>
            <td>-3.847654</td>
            <td>0.169002</td>
          </tr>
          <tr>
            <th>90</th>
            <td>stevan jovetic</td>
            <td>351</td>
            <td>41.0</td>
            <td>34.951424</td>
            <td>-6.048576</td>
            <td>0.099577</td>
          </tr>
          <tr>
            <th>91</th>
            <td>sergio garcia</td>
            <td>284</td>
            <td>37.0</td>
            <td>34.942222</td>
            <td>-2.057778</td>
            <td>0.123036</td>
          </tr>
          <tr>
            <th>92</th>
            <td>mame biram diouf</td>
            <td>213</td>
            <td>40.0</td>
            <td>34.520134</td>
            <td>-5.479866</td>
            <td>0.162066</td>
          </tr>
          <tr>
            <th>93</th>
            <td>luis muriel</td>
            <td>303</td>
            <td>38.0</td>
            <td>34.517954</td>
            <td>-3.482046</td>
            <td>0.113921</td>
          </tr>
          <tr>
            <th>94</th>
            <td>dimitri payet</td>
            <td>456</td>
            <td>44.0</td>
            <td>34.123482</td>
            <td>-9.876518</td>
            <td>0.074832</td>
          </tr>
          <tr>
            <th>95</th>
            <td>martin harnik</td>
            <td>235</td>
            <td>40.0</td>
            <td>34.053115</td>
            <td>-5.946885</td>
            <td>0.144907</td>
          </tr>
          <tr>
            <th>96</th>
            <td>paco alcacer</td>
            <td>194</td>
            <td>33.0</td>
            <td>33.693254</td>
            <td>0.693254</td>
            <td>0.173677</td>
          </tr>
          <tr>
            <th>97</th>
            <td>iago aspas</td>
            <td>238</td>
            <td>39.0</td>
            <td>33.653131</td>
            <td>-5.346869</td>
            <td>0.141400</td>
          </tr>
          <tr>
            <th>98</th>
            <td>gonzalo castro</td>
            <td>408</td>
            <td>39.0</td>
            <td>33.576545</td>
            <td>-5.423455</td>
            <td>0.082295</td>
          </tr>
          <tr>
            <th>99</th>
            <td>lorenzo insigne</td>
            <td>394</td>
            <td>28.0</td>
            <td>33.497320</td>
            <td>5.497320</td>
            <td>0.085019</td>
          </tr>
          <tr>
            <th>100</th>
            <td>amauri</td>
            <td>225</td>
            <td>20.0</td>
            <td>33.190712</td>
            <td>13.190712</td>
            <td>0.147514</td>
          </tr>
        </tbody>
      </table>
    );
  }
}
export default XG2;
