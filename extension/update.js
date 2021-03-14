var x = document.getElementsByTagName('p');
var biasRes="";
var paras = [];

for (var i = 0; i < x.length; i++) {
  var str = x[i].innerText;
  paras.push(str);
}
var data = JSON.stringify({"text": paras});

  // var result = str.match(/([^\.!\?]+[\.!\?]+)|([^\.!\?]+$)/g);
  // try {
  //   for (var j = 0; j < result.length; j++)
  //     paras.push(result[j]);
  // } catch (err) {
  //   continue;
  // }


// var parass="Joe Biden has consistently held a wide polling lead over US President Donald Trump ahead of November\u2019s election. But, despite Trump\u2019s botched response to the Covid-19 pandemic \u2013 a failure that has left the economy far weaker than it otherwise would have been \u2013 he has maintained a marginal edge on the question of which candidate would be better for the US economy. Thanks to Trump, a country with just 4% of the world\u2019s population now accounts for more than 20% of total Covid-19 deaths \u2013 an utterly shameful outcome, given America\u2019s advanced (albeit expensive) healthcare system. The presumption that Republicans are better than Democrats at economic stewardship is a longstanding myth that must be debunked. In our 1997 book, Political Cycles and the Macroeconomy, the late (and great) Alberto Alesina and I showed that Democratic administrations tend to preside over faster growth, lower unemployment and stronger stock markets than Republican presidents do. In fact, US recessions almost always occur under Republican administrations \u2013 a pattern that has persisted since our book appeared. The recessions of 1970, 1980-82, 1990, 2001, 2008-09, and, now, 2020 all occurred when a Republican was in the White House (with the exception of the double-dip recession of 1980-82, which started under Jimmy Carter but continued under Ronald Reagan).\r\nLikewise, the Great Recession of 2008-09 was triggered by the 2007-08 financial crisis, which also occurred on the GOP\u2019s watch. This tendency is not random: loose regulatory policies lead to financial crises and recessions. And, compounding matters, Republicans consistently pursue reckless fiscal policies, spending as much as Democrats do, but refusing to raise taxes to make up for the resulting budget shortfalls. Owing to such mismanagement under the George W Bush presidency, President Barack Obama and Vice-president Biden inherited the worst recession since the Great Depression. In early 2009, the US unemployment rate surpassed 10%, growth was in free fall, the budget deficit had already exceeded $1.2tn, and the stock market was down almost 60%. Yet, by the end of Obama\u2019s second term in early 2017, all of those indicators had massively improved. In fact, even before the Covid-19 recession, US employment and GDP growth, as well as the stock market\u2019s performance, were better under Obama than under Trump. Just as Trump inherited millions from his father, only to squander it on business failures, so he inherited a strong economy from his predecessor, only to wreck it within a single term.\r\nThe rally in equity prices this past August coincided with a hardening of Biden\u2019s polling lead, suggesting that markets are not nervous about a Biden presidency, or about the prospects of a Democratic sweep of Congress. The reason is simple: a Biden administration would be unlikely to pursue radical economic policies. Biden may be surrounded by progressive advisers, but they are all fully within the political mainstream. Moreover, his vice-presidential pick, US Senator Kamala Harris of California, is a proven moderate, and most of the Democratic senators who would be seated in a new Congress are more centrist than the leftwing of their party. Yes, a Biden administration might raise marginal tax rates on corporations and the top 1% of households, which Trump and congressional Republicans cut merely to give wealthy donors and corporations a $1.5tn handout. But a higher tax rate would result in only a modest hit to corporate profits. And any costs to the economy would be more than offset by closing the loopholes that allow for tax avoidance and shifting profits and production abroad, and with Biden\u2019s proposed \u201CMade in America\u201D policies to bring more jobs, profits, and production home.\r\nMoreover, while Trump and his fellow Republicans have not even bothered to formulate a policy platform for this election, Biden has proposed a suite of fiscal policies designed to boost economic growth. If Democrats take control of both houses of Congress and the White House, a Biden administration would pursue a larger fiscal stimulus targeted at households, workers, and small businesses that need it, as well as job-creating infrastructure spending and investments in the green economy. They would not invest in tax cuts for billionaires, but rather in education and worker retraining, and in proactive industrial and innovation policies to ensure future competitiveness. Private business would no longer be terrorised by the president in Twitter tantrums. Democrats also are calling for higher minimum wages to boost labour income and consumption, along with more sensible regulations to reduce carbon dioxide emissions. They would push for policies to restore some bargaining power to workers, and to protect savers from predatory financial institutions. And they would have a much more sensible approach to trade, immigration, and foreign policy, repairing US alliances and partnerships and pursuing a policy of \u201Ccoop-etition\u201D rather than lose-lose containment vis-\u00E0-vis China. All these measures would be good for jobs, growth, and markets.\r\nAlthough Trump ran as a populist, he is a wannabe plutocrat \u2013 a pluto-populist \u2013 and that is how he has governed. His economic policies have been disastrous for US workers and long-term economic competitiveness. Trade and immigration policies that were billed as measures to restore US jobs have had the opposite effect. The \u201Cdeaths of despair\u201D that disproportionately afflict white blue-collar and precariat workers have not fallen under Trump; with more than 70,000 drug overdose deaths in 2019, this American carnage continues. If the US is to fill the high-value jobs of the future, it will need to train its workers, not embrace self-destructive protectionism and xenophobia. The choice for US voters who are concerned about America\u2019s economic prospects could not be clearer. Biden, who has long tapped into blue-collar concerns, is the only presidential candidate in recent history without an Ivy League background. He has a better chance than anyone of rebuilding the Democratic coalition and winning back the support of disaffected, working-class voters. For all Americans who care about their and their children\u2019s future, the right choice this November could not be clearer.";
// var data = JSON.stringify({"text": parass});

var xhr = new XMLHttpRequest();

xhr.onreadystatechange = function() {
    if(xhr.readyState == 4 && this.status == 200)
     {
        biasRes = this.responseText;

      //  alert(xhr.responseText);
    }
  };
//xhr.open("POST", "http://127.0.0.1:5000/api/analyze", true);
xhr.open("POST", "http://127.0.0.1:5002/check", true);
xhr.setRequestHeader('Content-type', 'application/json');
xhr.send(data);

// xhr.onload = function() {
//       var dataa = JSON.parse(this.responseText);
//       x[1].innerHTML = "<b style=\"color:green;\">qqqaaaaaaatsea</b>" + paras[0];
// };

// console.log(document.body.innerHTML);
// // document.body.innerHTML = "MALHOTRA";
