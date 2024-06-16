Events.on(GameOverEvent, event => {
 Vars.ui.hudfrag.showToast("womp womp.");
})

Events.on(SectorLaunchEvent, e => {
    if(e.sector.planet = Vars.content.planet("neo-dustry-atlantis")){
        Vars.content.unit("neo-dustry-assistant").spawn(Team.sharded, Vars.player.x, Vars.player.y)
        Vars.content.unit("neo-dustry-assistant").spawn(Team.sharded, Vars.player.x, Vars.player.y)
    }
});