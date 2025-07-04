"use client"
import React, { useRef } from 'react';
import { DocumentEditorContainerComponent, Toolbar, Inject } from '@syncfusion/ej2-react-documenteditor';
import './globals.css';

const html = `
Day 1: Ancient Civilizations, Colonial Rule, and Amalgamation
Early History and Ancient Civilizations (c. 1500 BC - 1500 AD)
The history of Nigeria stretches back thousands of years, with archaeological evidence suggesting human habitation as early as 13,000 BC. The region was home to diverse and sophisticated civilizations long before European contact.

One of the most notable was the Nok culture, which flourished between 1500 BC and 200 AD in what is now central Nigeria. The Nok are renowned for their intricate terracotta sculptures, which provide valuable insights into their artistic, technological, and social achievements. Other ancient societies include the Iwo Eleru culture in the southwest and the Daima culture in the Lake Chad region.

By the 9th century AD, significant kingdoms and empires began to emerge:

Kanem-Bornu Empire: Located around Lake Chad, this empire prospered through trans-Saharan trade and developed complex political systems. It lasted for over a millennium, facing challenges from various groups.

Hausa City-States: In northern Nigeria, cities like Kano, Zaria, and Katsina developed into powerful city-states from around 1000 AD. While sharing common language, culture, and later, Islam, they were often in rivalry. The Sokoto Caliphate was established in the 19th century by Usman Dan Fodio, unifying many of these states under Islamic rule.

Yoruba Kingdoms: In the west, the Yoruba people established powerful city-states, with Ile-Ife considered the mythical origin point. Oyo became the most dominant Yoruba kingdom in the 16th and 17th centuries, known for its strong military and influence over other states.

Benin Kingdom: Located in the Edo-speaking region, the Benin Kingdom emerged around the 13th century. It became a major trading power, renowned for its elaborate bronze castings and a highly centralized political system under the Oba.

Igbo Societies: In contrast to the centralized monarchies, many Igbo societies in the southeast were organized into self-contained villages or federations, with governance shared among elders and age-grade associations. The Aro Confederacy later established significant influence through trade and oracular activities.

Islam arrived in Nigeria through the Bornu Empire around the 11th century and spread to the Hausa kingdoms, facilitating long-distance trade and introducing new administrative tools. Christianity was introduced in the 15th century by Portuguese monks to the Kingdom of Warri.

The Trans-Atlantic Slave Trade (16th - 19th Centuries)
From the 16th to the 19th centuries, the trans-Atlantic slave trade had a devastating impact on the Nigerian region. Millions of people, particularly from the areas bordering the Bight of Benin (which became known as the "Slave Coast"), were forcibly taken and transported to the Americas. This brutal trade led to:

Depopulation: The loss of strong, young men and women severely impacted communities and hindered economic and agricultural development.

Increased Conflict: The demand for enslaved people fueled inter-ethnic wars and raids, creating an atmosphere of lawlessness and violence.

Societal Disruption: Families were torn apart, traditional industries declined as focus shifted to the slave trade, and existing empires like Oyo and Benin were weakened by internal strife and reliance on the trade.

Economic Disruption: While some coastal states initially gained wealth, the overall effect was devastating, destabilizing societies and making sustainable development impossible.

British Colonization and Amalgamation (Mid-19th Century - 1914)
British interest in Nigeria grew in the 19th century, initially driven by the desire to abolish the slave trade (which also served as an excuse for intervention) and to promote their trading interests, particularly in palm oil and other resources.

Early Interventions: Britain annexed Lagos in 1861 and established the Oil River Protectorate in 1884. British influence gradually expanded, but effective occupation began after the 1885 Berlin Conference, where European powers formally recognized Britain's claim over the area.

Company Rule: From 1886 to 1899, much of the country was administered by the Royal Niger Company, led by George Taubman Goldie, which secured British dominance against other European rivals.

Crown Rule and Protectorates: In 1900, the British government assumed direct control, establishing the Southern Nigeria Protectorate and the Northern Nigeria Protectorate.

The Amalgamation of 1914: On January 1, 1914, Lord Frederick Lugard, the Governor of both protectorates, formally amalgamated them to form the Colony and Protectorate of Nigeria. This administrative act was primarily for economic and administrative convenience, allowing the more prosperous Southern Protectorate to subsidize the less developed North. The amalgamation brought together diverse ethnic and religious groups with distinct histories, cultures, and political organizations under a single colonial administration. This "divide and rule" policy, while facilitating British control, also sowed seeds of future ethnic and regional tensions.

Indirect Rule: The British implemented a system of "indirect rule," particularly in the North, where they governed through existing traditional chiefs and institutions, albeit under British guidance. This system had varying degrees of success and impact across different regions.

Day 2: Independence, Civil War, Military Rule, and Modern Challenges
Path to Independence (Post-WWII - 1960)
After World War II, a strong nationalist movement emerged in Nigeria, driven by educated elites and a growing awareness of self-determination. Key figures like Nnamdi Azikiwe, Obafemi Awolowo, and Abubakar Tafawa Balewa played crucial roles in advocating for independence.

Constitutional Reforms: The British gradually introduced constitutional reforms, granting Nigerians greater autonomy.

Political Parties: Major political parties formed along regional and ethnic lines, including the National Council of Nigeria and the Cameroons (NCNC), the Northern People's Congress (NPC), and the Action Group (AG).

Self-Governance: By the 1950s, Nigeria was transitioning towards self-rule, culminating in the Nigeria Independence Act 1960.

Independence Day: On October 1, 1960, Nigeria gained full independence from British rule, becoming a constitutional monarchy within the Commonwealth of Nations. Sir Abubakar Tafawa Balewa became the first Prime Minister, and Nnamdi Azikiwe served as the first Governor-General (later President when Nigeria became a republic in 1963).

The Nigerian Civil War (1967-1970)
The euphoria of independence was short-lived. Deep-seated ethnic, religious, and economic tensions, exacerbated by colonial policies and regional rivalries, led to instability.

First Military Coup (January 1966): A group of largely Igbo junior army officers staged a coup, assassinating the Prime Minister and regional premiers. This led to a military administration under Major General Johnson Aguiyi-Ironsi (an Igbo).

Counter-Coup (July 1966): Northern officers staged a counter-coup, assassinating Aguiyi-Ironsi and bringing Lieutenant Colonel (later General) Yakubu Gowon to power. This was followed by widespread anti-Igbo riots in the North.

Biafran Secession: In response to the persecution and perceived marginalization, the Eastern Region, largely inhabited by the Igbo people, declared its secession as the Republic of Biafra on May 30, 1967, led by Lieutenant Colonel Odumegwu Ojukwu.

The War: The federal government viewed this as an act of rebellion, leading to a brutal civil war that lasted from July 1967 to January 1970. The conflict resulted in an estimated 500,000 to 3 million deaths, primarily due to starvation and disease caused by blockades.

End of War: Biafra surrendered on January 15, 1970, and Nigeria was reunified.

Military Rule and Aborted Transitions (1970-1999)
Following the Civil War, Nigeria entered a prolonged period of military rule, punctuated by brief attempts at civilian governance.

Gowon's Regime: General Gowon's government focused on reconciliation and reconstruction after the war.

Successive Coups: The country experienced a series of military coups, with leaders like Murtala Mohammed (who initiated a transition to civilian rule but was assassinated), Olusegun Obasanjo (who handed power to civilians in 1979), Muhammadu Buhari, Ibrahim Babangida (who annulled the 1993 presidential election results), and Sani Abacha.

Second Republic (1979-1983): A brief return to civilian rule under President Shehu Shagari (Second Republic) was characterized by corruption and political instability, leading to another military coup in 1983.

Abacha's Regime (1993-1998): General Sani Abacha's rule was marked by severe human rights abuses, political repression, and international isolation.

Return to Democracy and Modern Challenges (1999-Present)
Fourth Republic: Following Abacha's sudden death in 1998, General Abdulsalami Abubakar initiated a swift transition to civilian rule. On May 29, 1999, Nigeria returned to democracy with the inauguration of Olusegun Obasanjo (a former military head of state) as President, marking the beginning of the Fourth Republic.

Democratic Consolidation: Since 1999, Nigeria has maintained continuous civilian rule, the longest such period since independence. Power has been transferred peacefully between different political parties.

Current Challenges: Despite its status as Africa's largest economy and most populous nation, Nigeria continues to grapple with significant challenges:

Insecurity: Persistent issues include Boko Haram insurgency in the northeast, banditry and kidnappings in the northwest, and separatist agitations in the southeast.

Economic Instability: The economy is heavily reliant on oil, making it vulnerable to price fluctuations. Challenges include high inflation, unemployment, widespread poverty (with a large percentage of the population living below the poverty line), and inadequate infrastructure (power, transport).

Governance Issues: Corruption, weak public institutions, and spatial inequality (disparities between regions) remain significant hurdles to development.

Social Issues: Limited job creation, a large youth population entering the labor force annually, and increasing emigration reflect the lack of opportunities for many citizens.

Nigeria's journey has been complex, shaped by its rich pre-colonial heritage, the profound impact of colonialism and the slave trade, and the struggles of nation-building. The country continues to strive for stability, economic diversification, and improved living standards for its diverse population.
` 

function Home() {
  const editorObj = useRef<DocumentEditorContainerComponent | null>(null);
  let contentChanged = false;

  function onContentChange() {
    contentChanged = true;
    console.log("contentChanged", contentChanged);
  }

  const insertTextonLoop = async () => {
    if (!editorObj.current) return;
    const editor = editorObj.current.documentEditor.editor;
    // Split html into words, preserving whitespace after each word
    const wordRegex = /\S+\s*/g;
    const words = html.match(wordRegex) || [];
    for (let i = 0; i < words.length; i += 5) {
      const chunk = words.slice(i, i + 5).join("");
      editor.pasteContents(chunk);
      // eslint-disable-next-line no-await-in-loop
      await new Promise(res => setTimeout(res, 100)); // 100ms delay between chunks
    }
  };

  function onCreate() {
    const defaultCharacterFormat = {
      fontFamily: 'Arial',
    };
    editorObj.current?.documentEditor.setDefaultCharacterFormat(defaultCharacterFormat);
  }

  const handleChatKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      insertTextonLoop();
    }
  };

  return (
    <div className="App">
      <div className='cover-container' style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 32px' }}>
        <div style={{ display: 'flex', alignItems: 'center', height: '100%' }} className='text-2xl font-bold header-name'>
          🧚 Tabs Editor
        </div>
        <div className='flex flex-row gap-2'>
          <button
            className="bg-gray-100 hover:bg-blue-700 text-sm text-black font-semibold py-2 px-4 rounded-full transition-colors duration-200"
            style={{ height: 40 }}
          >
            Plagiarism Checker
          </button>
          <button
            className="bg-gray-100 hover:bg-blue-700 text-sm text-black font-semibold py-2 px-4 rounded-full transition-colors duration-200"
            style={{ height: 40 }}
          >
            AI Detector
          </button>
        </div>
      </div>
      <div style={{ marginTop: 10 }} className='page-container'>
        <div className='editor-container'>
          <DocumentEditorContainerComponent
            ref={editorObj}
            height='90vh'
            contentChange={onContentChange}
            enableToolbar={true}
            serviceUrl="https://ej2services.syncfusion.com/production/web-services/api/documenteditor/"
            created={onCreate}
          >
            <Inject services={[Toolbar]} />
          </DocumentEditorContainerComponent>
        </div>

        <div className="chat-container flex flex-col h-full bg-white border-l border-gray-200">
          <div className="chat-header px-4 py-2 border-b border-gray-200">
            <h1 className="text-lg font-semibold">Assistant</h1>
          </div>
          {/* Chat messages would go here */}
          <div className="flex-1 overflow-y-auto" />
          <div className="chat-input-area flex items-end gap-2 p-4 border-t border-gray-200 bg-white sticky bottom-0">
            <textarea
              className="flex-1 text-sm resize-none rounded-md border border-gray-300 p-2 text-base min-h-[40px] focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Type your message..."
              rows={3}
              onKeyDown={handleChatKeyDown}
            />
            
          </div>
        </div>


      </div>
    </div>
  );
}

export default Home;