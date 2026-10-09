function diffFollowers(old,current,now=new Date().toISOString()){
  const events=old?Array.isArray(old.events)?[...old.events]:[]:[];
  for(const [id,f] of Object.entries(current))if(!old||!old.followers?.[id]||old.followers[id].at!==f.at)events.push({type:'follow',name:f.name,at:f.at});
  if(old?.followers)for(const [id,f] of Object.entries(old.followers))if(!current[id])events.push({type:'unfollow',name:f.name,at:now});
  return events.sort((a,b)=>new Date(b.at)-new Date(a.at)).slice(0,500);
}
if(typeof module!=='undefined')module.exports={diffFollowers};
