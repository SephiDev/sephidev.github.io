$('.ui.radio.checkbox')
  .checkbox()
;

$('#submit').click(function () {

    let output = `[center][color=Transparent]aaa[/color]
    [img]https://i.imgur.com/ODe46mh.png[/img]
    
    [color=grey][size=100]LOS SANTOS COUNTY SHERIFF'S DEPARTMENT[/size][/color]
    [color=black][size=150][b]FIELD TRAINING OBSERVATION REPORT[/b][/size][/color]
    [/center]
    
    
                    [transtable=Arial]
                    [tr]
                    [td][b]REPORT DATE[/b][/td]
                    [td][b]REPORT TIME[/b][/td]
                    [td][b]INSTRUCTIVE/EVALUATIVE[/b][/td][/tr]
                    [tr]
                    [td]${$('input[name="date"]').val()}[/td]
                    [td]${$('input[name="time"]').val()}[/td]
                    [td]${$('input[name="phase"]').val()}[/td]
                    [/tr]
                    [/transtable]
    
                    [transtable=Arial]
                    [tr]
                    [td][b]LET NAME[/b][/td]
                    [td][b]EMPLOYEE NUMBER[/b][/td]
                    [td][b]PRD-II NAME[/b][/td]
                    [td][b]EMPLOYEE NUMBER[/b][/td][/tr]
                    [tr]
                    [td]${$('input[name="trainee_first"]').val()} ${$('input[name="trainee_last"]').val()}[/TD]
                    [td]${$('input[name="trainee_serial"]').val()}[/TD]
                    [td]${$('input[name="fto_first"]').val()} ${$('input[name="fto_last"]').val()}[/TD]
                    [td]${$('input[name="fto_serial"]').val()}[/TD][/tr][/transtable]
    
    [transtable=Arial][tr]
    [td][b][center]CATEGORICAL EVALUATION[/center][/b][/td][/tr][/transtable]
    
    [transtable=Arial]
    [tr]
    [td][justify][b]INSTRUCTIONS:[/b]
    [indent=25]C — A rating of C (Competent) is the minimum required to be considered at standard for a solo patrol deputy.
    S — A rating of S (Superior) denotes outstanding performance and shall only be attributed if the trainee exceeds expectations.
    N/I — A rating of N/I (Needs Improvement) shall be ticked to denote needing further training focus on a specific task.
    N/O — A rating of N/O (Not Observed) shall be ticked for all situations which were not encountered in the patrol.
    NRT — A rating of NRT (Not Responding to Training) shall be given if trainee has no reaction to training.[/indent][/justify][/td][/tr][/transtable]
    
    [transtable=Arial][tr]
    [td][b]ATTITUDE[color=transparent]-------------------------------------------------------------[/color][/b][/td]
    [td][b][center][center]RATING[/center][/center][/b][/td]
    [tr]
    [td]Acceptance of Feedback/Criticism[/td]
    [td][center][center]${$('input[name="field1"]:checked').val()}[/center][/center][/td]
    [tr]
    [td]Attitude toward Dispatch Duties[/td]
    [td][center]${$('input[name="field2"]:checked').val()}[/center][/td]
    [tr]
    [td]Integrity/Ethics[/td]
    [td][center]${$('input[name="field3"]:checked').val()}[/center][/td]
    [tr]
    [td]Leadership[/td]
    [td][center]${$('input[name="field4"]:checked').val()}[/center][/td]
    [/transtable]
    
    [transtable=Arial][tr]
    [td][b]APPEARANCE[color=transparent]-------------------------------------------------------[/color][/b][/td]
    [td][b][center]RATING[/center][/b][/td]
    [tr]
    [td]General Appearance[/td]
    [td][center]${$('input[name="field5"]:checked').val()}[/center][/td]
    [/transtable]
    
    [transtable=Arial][tr]
    [td][b]RELATIONSHIPS[color=transparent]---------------------------------------------------[/color][/b][/td]
    [td][b][center]RATING[/center][/b][/td]
    [tr]
    [td]With Deputies[/td]
    [td][center]${$('input[name="field6"]:checked').val()}[/center][/td]
    [tr]
    [td]With other Agencies' Members[/td]
    [td][center]${$('input[name="field7"]:checked').val()}[/center][/td]
    [/transtable]
    
    [transtable=Arial][tr]
    [td][b]PERFORMANCE[color=transparent]---------------------------------------------------[/color][/b][/td]
    [td][b][center]RATING[/center][/b][/td]
    [tr]
    [td]Radio Communications: Relaying Traffic[/td]
    [td][center]${$('input[name="field8"]:checked').val()}[/center][/td]
    [tr]
    [td]Radio Communications: Understanding Requests[/td]
    [td][center]${$('input[name="field9"]:checked').val()}[/center][/td]
    [tr]
    [td]Radio Communications: Facilitating Requests:[/td]
    [td][center]${$('input[name="field10"]:checked').val()}[/center][/td]
    [tr]
    [td]Mobile Computer Terminal:[/td]
    [td][center]${$('input[name="field11"]:checked').val()}[/center][/td]
    [/transtable]
    
    [transtable=Arial][tr]
    [td][b]KNOWLEDGE[color=transparent]-------------------------------------------------------[/color][/b][/td]
    [td][b][center]RATING[/center][/b][/td]
    [tr]
    [td]Department Policies and Procedures[/td]
    [td][center]${$('input[name="field18"]:checked').val()}[/center][/td]
    [tr]
    [td]Radio Codes / Communications[/td]
    [td][center]${$('input[name="field19"]:checked').val()}[/center][/td]
    [/transtable]
    
    [transtable=Arial][tr]
    [td][b](( ROLEPLAY ))[color=transparent]-----------------------------------------------------[/color][/b][/td]
    [td][b][center]RATING[/center][/b][/td]
    [tr]
    [td]Roleplay Quality[/td]
    [td][center]${$('input[name="field21"]:checked').val()}[/center][/td]
    [tr]
    [td]Character Depth/Portrayal[/td]
    [td][center]${$('input[name="field22"]:checked').val()}[/center][/td]
    [tr]
    [td]Out-of-Character Demeanor[/td]
    [td][center]${$('input[name="field23"]:checked').val()}[/center][/td]
    [tr]
    [/transtable]
    
    [transtable=Arial][tr]
                    [td][b][center]NARRATIVE EVALUATION[/center][/b][/td][/tr][/transtable][hr][/hr]
                    [transtable=Arial]
                    [tr]
                    [td][justify][b]INSTRUCTIONS:[/b] Parts A & B — Based on the completed FTOR, determine the trainee’s MOST and LEAST satisfactory performance with the help of the Performance Reference List.[/justify][/td][/tr][/transtable][hr][/hr]
                    [transtable=Arial]
                    [tr][td][b]PART A. MOST SATISFACTORY PERFORMANCE[/b][/TD][/TR]
                    [tr][td]${$('#positive').val()}[/TD][/TR][/transtable][hr][/hr]
                    [transtable=Arial]
                    [tr][td][b]PART B. LEAST SATISFACTORY PERFORMANCE[/b][/TD][/TR]
                    [tr][td]${$('#negative').val()}[/TD][/TR][/transtable][hr][/hr]
                    [transtable=Arial]
                    [tr]
                    [td][b][center]SIGNATURES[/center][/b][/td][/tr][/transtable][hr][/hr]
                    [transtable=Arial]
                    [tr]
                    [td][b]LET SIGNATURE[/b][/td]
                    [td][b]DATE[/b][/td][/tr]
                    [tr]
                    [td]${$('input[name="trainee_first"]').val()} ${$('input[name="trainee_last"]').val()}[/TD]
                    [td]${$('input[name="date"]').val()}[/TD][/tr]
                    [tr]
                    [td][b]PRD-II SIGNATURE[/b][/td]
                    [td][b]DATE[/b][/td][/tr]
                    [tr]
                    [td]${$('input[name="fto_first"]').val()} ${$('input[name="fto_last"]').val()}[/TD]
                    [td]${$('input[name="date"]').val()}[/TD][/tr][/transtable]`
    
      

    $('#output').val(output);
});

$('#copy').click(function() {
    
  var copyText = document.getElementById('output');

  /* Select the text field */
  copyText.select();
  copyText.setSelectionRange(0, 99999); /* For mobile devices */

   /* Copy the text inside the text field */
  navigator.clipboard.writeText(copyText.value);

});
