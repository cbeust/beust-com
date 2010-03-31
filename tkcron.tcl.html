<html>
<head>
</head>

<body>

<pre>


#!/usr/local/bin/wish

# A simple interface to ease the creation of crontab jobs
# Cedric BEUST (beust@sophia.inria.fr)

# Port to Tk 4.0 by
# Wann-Ban Chi (wbchi@dslab.csie.ncu.edu.tw)

# More sophisticate features added by
# Colin Lee (colin@dslab.csie.ncu.edu.tw)

# TkCron 2.12
# This version is for Tk 4.0

# These booleans are set to 1 if the day is selected
set Sunday 0
set Monday 0
set Tuesday 0
set Wednesday 0
set Thursday 0
set Friday 0
set Saturday 0
set Noday 1

# Receive a string i-j, return a string i,i+1,...,j
proc extendDash {str} {
    set result ""
    set start [string index $str 0]
    set end [string index $str 2]
    set i $start
    if {[string index $str 1] != "-"} {
	set result $start
    } else {
	while {$i <= $end} {
	    if {[isStringEmpty $result]} {
		set result [format "%s" $i]
	    } else {
		set result [format "%s,%s" $result $i]
	    }
	    incr i
	}
    }
    return $result
}

# dow is a crontab entry : either a number, either several numbers separated
# by , or -. This function sets the booleans Sunday...Saturday appropriately
proc parseDayOfWeek {dow} {
    global Sunday Monday Tuesday Wednesday Thursday Friday Saturday Noday
    set Sunday 0
    set Monday 0
    set Tuesday 0
    set Wednesday 0
    set Thursday 0
    set Friday 0
    set Saturday 0
    set Noday 1

    if {[string compare "*" $dow] == 1} {
	return
    }

    while {![isStringEmpty $dow]} {
	set c [string index $dow 0]
	set d [string index $dow 1]
	if {$d == "-"} {
	    set dow [format %s%s \
			    [extendDash [string range $dow 0 2]] \
			    [string range $dow 3 end]]
	}
	case $c {
	    0 { set Sunday 1; set Noday 0 }
	    1 { set Monday 1; set Noday 0 }
	    2 { set Tuesday 1; set Noday 0 }
	    3 { set Wednesday 1; set Noday 0 }
	    4 { set Thursday 1; set Noday 0 }
	    5 { set Friday 1; set Noday 0 }
	    6 { set Saturday 1; set Noday 0 }
	}
	set dow [string range $dow 1 end]
    }
}

# 1 if string is empty
proc isStringEmpty {str} {
    if {[string length $str] == 0} {
	return 1
    } else {
	return 0
    }
}

# Add the entry in the listbox
# If there are no argument specified, it will be appended at the end.
# Otherwise, we insert the entry according to the args.
proc addEntry {args} {
    set lb .mw.lv.list.f2.lb
    set newentry [getEntryFromGadgets]
    if {![string match "* * * * * * no_command" $newentry] && \
	 [string match "* * * * * no_command" $newentry]} {
	return [notifyBox -prompt "No command specified!" -master . \
		-button {{OK 0}}]
    } elseif {[lsearch -exact [listboxContents $lb] $newentry] != -1} {
	return [notifyBox -prompt "Duplicate entries!" -master . \
		-button {{OK 0}}]
    } elseif {$args == ""} {
	$lb insert end $newentry
	$lb selection clear 0 end
	$lb see end
    } else {
	$lb insert $args $newentry
    }
    clearGadgets
    return 1
}

# Clear all the gadgets
proc clearGadgets {} {
    .mw.repeat.minhour.f1.t1 delete 0 end
    .mw.repeat.minhour.f1.t2 delete 0 end
    .mw.repeat.dayOfMonth.f1.t delete 0 end
    .mw.repeat.month.f1.t delete 0 end
    .mw.repeat.command.t delete 1.0 end
    enableNoday
    updateAddEntry
    updateRemoveEntry
    updateModifyEntry
}

# Remove the entry from the listbox
# If there are no argument specified, ask for confirmation.
# Otherwise, remove the entry immediately.
proc removeEntry {args} {
    set lb .mw.lv.list.f2.lb
    set sel [$lb curselection]
    set confirm 1
    if {$args == ""} {
	set confirm [notifyBox -prompt "Remove entry confirm!" -master . \
		     -button {{Ok 1} {Cancel 0}}]
    }
    if {$confirm} {
	if {$sel != ""} {
	    set reverseSel ""
	    # reverse the list since these are indexes
	    foreach i $sel {
		set reverseSel [linsert $reverseSel 0 $i]
	    }
	    foreach i $reverseSel {
		$lb delete $i
	    }
	}
	clearGadgets
    }
}

# Modify the entry from the listbox 
proc modifyEntry {} {
    set lb .mw.lv.list.f2.lb
    set sel [$lb curselection]
    if {[notifyBox -prompt "Modify entry confirm!" -master . \
	 -button {{Ok 1} {Cancel 0}}]} {
	if {[addEntry $sel]} {
	    removeEntry -noconfirm
	}
    }
}

# Notify window
#
# Arguments:
#   -prompt      a text string to prompt with
#   -master      name of toplevel to be transient to
#   -button      a list of button text and return value
#
# Example:
#   notify -prompt "Notify!" -master . -button {{OK 1} {CANCEL 0}}
#
proc notifyBox {args} {
    global retvalue
    set prompt "Nofity!"
    set master ""
    set button {{OK 1}}
    foreach option {prompt master button} {
	set index [lsearch -exact $args "-$option"]
	if {$index != -1} {
	    incr index
	    set value [lindex $args $index]
	    uplevel 0 [list set $option $value]
	}
    }
    set w .notify
    if {[winfo exists $w]} {return 0}
    toplevel $w
    if {[string length $master]} {
	wm transient $w $master
	set xpos [expr [winfo rootx $master]+[winfo width $master]/3]
	set ypos [expr [winfo rooty $master]+[winfo height $master]/3]
	wm geometry $w +${xpos}+${ypos}
    }
    frame $w.mframe
    pack $w.mframe -side top -expand true -fill x
    frame $w.mframe.bmp -bd 2 -relief groove
    label $w.mframe.bmp.label -bitmap question
    message $w.mframe.msg -text $prompt -anchor w -width 300 -fg purple1
    pack $w.mframe.bmp -side left -padx 10 -pady 10
    pack $w.mframe.bmp.label
    pack $w.mframe.msg -side left -fill both -expand true -padx 10 -pady 15
    frame $w.bframe
    pack $w.bframe -side bottom -pady 10 -expand true
    set length [llength $button]
    for {set i 0} {$i < $length} {incr i} {
	button $w.bframe.($i) -text [lindex [lindex $button $i] 0] \
		-command "set retvalue [lindex [lindex $button $i] 1]" \
		-width 5 -relief raised
	pack $w.bframe.($i) -side left -padx 10 -expand yes
    }
    tkwait visibility $w
    after 20 grab $w
    focus $w
    bell -displayof $w
    tkwait variable retvalue
    grab release $w
    destroy $w
    return $retvalue
}

# Read the crontab entry from the gadgets
proc getEntryFromGadgets {} {
    global Sunday Monday Tuesday Wednesday Thursday Friday Saturday Noday
    set result {}
    set min {}
    set hour {}
    set dayOfMonth {}
    set month {}
    set command {}
    set tx .mw.repeat
    set str [.mw.repeat.minhour.f1.t1 get]
    if {[isStringEmpty $str]} {
	set str "*"
    }
    set min $str
    set str [.mw.repeat.minhour.f1.t2 get]
    if {[isStringEmpty $str]} {
	set str "*"
    }
    set hour $str
    set str [.mw.repeat.dayOfMonth.f1.t get]
    if {[isStringEmpty $str]} {
	set str "*"
    }
    set dayOfMonth $str
    set str [.mw.repeat.month.f1.t get]
    if {[isStringEmpty $str]} {
	set str "*"
    }
    set month $str
    set str [string trim [.mw.repeat.command.t get 1.0 end]]
    if {[isStringEmpty $str]} {
	set str "no_command"
    }
    set command $str
    set dow ""
    set j 0
    foreach i {Sunday Monday Tuesday Wednesday Thursday Friday Saturday} {
	if {[set $i] != 0} {
	    if {[isStringEmpty $dow]} {
		set dow [format "%s" $j]
	    } else {
		set dow [format "%s,%s" $dow $j]
	    }
	}
	incr j
    }
    if {[isStringEmpty $dow]} {
	set dow "*"
    }
    set result [format "%s %s %s %s %s %s" \
		$min $hour $dayOfMonth $month $dow $command]
    return $result
}

# Return the crontab string as a list
proc parseCrontabFile {str} {
    set crontablist [split $str \n]
    set listlength [llength $crontablist]
    for {set i 0} {$i < $listlength} {incr i 1} {
	if {![string match #* [lindex $crontablist $i]]} {
	    lappend result [lindex $crontablist $i]
	}
    }
    return $result
}

# Return the contents of the listbox
proc listboxContents {lb} {
    set result ""
    set sel [$lb curselection]
    $lb selection set 0 end
    set indices [$lb curselection]
    while {[llength $indices] != 0} {
	lappend result [$lb get [lindex $indices 0]]
	set indices [lrange $indices 1 end]
    }
    $lb selection clear 0 end
    if {$sel != ""} {
	$lb selection set $sel
    }
    return $result
}

# Read the listbox and return a string containing a valid listbox
proc getCrontabFromGadgets {} {
    set contents [listboxContents .mw.lv.list.f2.lb]
    set result [join $contents \n]
    return $result
}

proc updateAddEntry {} {
    if {[string length [string trim [.mw.repeat.command.t get 1.0 end]]]} {
	.mw.lv.list.f1.b1 config -state normal
    } else {
	.mw.lv.list.f1.b1 config -state disabled
    }
}

proc updateRemoveEntry {} {
    set lb .mw.lv.list.f2.lb
    set sel [$lb curselection]
    if {$sel == ""} {
	.mw.lv.list.f1.b2 config -state disabled
    } else {
	.mw.lv.list.f1.b2 config -state normal
    }
}

proc updateModifyEntry {} {
    set lb .mw.lv.list.f2.lb
    set sel [$lb curselection]
    if {$sel == ""} {
	.mw.lv.list.f1.b3 config -state disabled
	return
    }
    set newentry [getEntryFromGadgets]
    if {![string match "* * * * * * no_command" $newentry] && \
	 [string match "* * * * * no_command" $newentry]} {
	.mw.lv.list.f1.b3 config -state disabled
	return
    }
    set oldentry [$lb get $sel]
    if {[string compare $oldentry $newentry] != 0} {
	.mw.lv.list.f1.b3 config -state normal
    } else {
	.mw.lv.list.f1.b3 config -state disabled
    }
}

proc updateNoday {} {
    global Sunday Monday Tuesday Wednesday Thursday Friday Saturday
    if {$Sunday+$Monday+$Tuesday+$Wednesday+$Thursday+$Friday+$Saturday} {
	.mw.repeat.dayOfWeek.f1.radios.r2.any deselect
    } else {
	.mw.repeat.dayOfWeek.f1.radios.r2.any select
    }
    updateModifyEntry
}

proc enableNoday {} {
    .mw.repeat.dayOfWeek.f1.radios.r1.sunday deselect
    .mw.repeat.dayOfWeek.f1.radios.r1.monday deselect
    .mw.repeat.dayOfWeek.f1.radios.r1.tuesday deselect
    .mw.repeat.dayOfWeek.f1.radios.r1.wednesday deselect
    .mw.repeat.dayOfWeek.f1.radios.r2.thursday deselect
    .mw.repeat.dayOfWeek.f1.radios.r2.friday deselect
    .mw.repeat.dayOfWeek.f1.radios.r2.saturday deselect
    .mw.repeat.dayOfWeek.f1.radios.r2.any select
    updateModifyEntry
}

###############
# Callbacks
###############

# Retrieve the entry clicked and display it in the gadgets
proc displayCrontabEntry {} {
    set lb .mw.lv.list.f2.lb
    set tx .mw.repeat
    set sel [$lb curselection]
    if {$sel == ""} {
	return
    }
    set selection [$lb get $sel]
    scan $selection "%s %s %s %s %s %\[^\n\]" \
	 min hour dayOfMonth month dow command

    clearGadgets
    .mw.repeat.minhour.f1.t1 insert 0 $min
    .mw.repeat.minhour.f1.t2 insert 0 $hour
    .mw.repeat.dayOfMonth.f1.t insert 0 $dayOfMonth
    .mw.repeat.month.f1.t insert 0 $month
    .mw.repeat.command.t insert 1.0 $command
    parseDayOfWeek $dow
}

proc installCrontab {} {
    set cron [getCrontabFromGadgets]\n
    if [string match \n $cron] {
# delete crontab for Linux
	if {[catch {exec crontab -d}]} {
# delete crontab for SunOS, FreeBSD
	    catch {exec crontab -r}
	}
# replace crontab for Linux, FreeBSD
    } elseif {[catch {exec crontab - << $cron}]} {
# replace crontab for SunOS
	catch {exec crontab << $cron}
    }
    destroy .
}

proc cancelCrontab {} {
    destroy .
}

# Return a list of all the crontab entries
proc getCrontab {} {
    catch {exec crontab -l} cr
    .mw.lv.list.f2.lb delete 0 end
    if {[string match "*can't open*" $cr] || \
	[string match "*no crontab*" $cr]} {
	puts stdout "Mmmh... you don't seem to have a crontab on this machine"
	set result {}
    } else {
	set result [parseCrontabFile $cr]
	foreach i $result {
	    .mw.lv.list.f2.lb insert end $i
	}
    }
    return $result
}

##########
# Main
##########

proc main {} {
#    frame .mw -borderwidth 2 -relief raised
# Create a vertical frame that will show the crontab entry  (.mw.repeat)
    frame .mw.repeat -borderwidth 2 
    frame .mw.repeat.minhour -borderwidth 1
    frame .mw.repeat.dayOfMonth -borderwidth 1
    frame .mw.repeat.month -borderwidth 1
    frame .mw.repeat.dayOfWeek -borderwidth 1

    frame .mw.repeat.minhour.f1
    pack \
	[label .mw.repeat.minhour.f1.l2 -text "Hour"] \
	[entry .mw.repeat.minhour.f1.t2 -relief sunken -borderwidth 2 \
	 -width 15] \
	[label .mw.repeat.minhour.f1.l1 -text "Min"] \
	[entry .mw.repeat.minhour.f1.t1 -relief sunken -borderwidth 2 \
	 -width 15] -side left
    bind .mw.repeat.minhour.f1.t1 <Return> {focus [tk_focusNext %W]}
    bind .mw.repeat.minhour.f1.t1 <KeyRelease> {updateModifyEntry}
    bind .mw.repeat.minhour.f1.t2 <Return> {focus [tk_focusNext %W]}
    bind .mw.repeat.minhour.f1.t2 <KeyRelease> {updateModifyEntry}

    frame .mw.repeat.dayOfMonth.f1
    pack \
	[label .mw.repeat.dayOfMonth.f1.l -text "Day of month"] \
	[entry .mw.repeat.dayOfMonth.f1.t -relief sunken -borderwidth 2 \
	 -width 15] -side left
    bind .mw.repeat.dayOfMonth.f1.t <Return> {focus [tk_focusNext %W]}
    bind .mw.repeat.dayOfMonth.f1.t <KeyRelease> {updateModifyEntry}

    frame .mw.repeat.month.f1
    pack \
	[label .mw.repeat.month.f1.l -text "Month"] \
	[entry .mw.repeat.month.f1.t -relief sunken -borderwidth 2 \
	 -width 15] -side left
    bind .mw.repeat.month.f1.t <Return> {focus [tk_focusNext %W]}
    bind .mw.repeat.month.f1.t <KeyRelease> {updateModifyEntry}

    # Add Emacs c-u binding on entry widgets.
    bind Entry <Control-u> {%W delete 0 end}

    # put all the radios in a frame
    frame .mw.repeat.dayOfWeek.f1
    frame .mw.repeat.dayOfWeek.f1.radios -relief sunken -borderwidth 2
    frame .mw.repeat.dayOfWeek.f1.radios.r1
    frame .mw.repeat.dayOfWeek.f1.radios.r2

    pack \
	[checkbutton .mw.repeat.dayOfWeek.f1.radios.r1.sunday -text Sunday \
	 -relief flat -variable Sunday -command updateNoday -takefocus 0] \
	[checkbutton .mw.repeat.dayOfWeek.f1.radios.r1.monday -text Monday \
	 -relief flat -variable Monday -command updateNoday -takefocus 0] \
	[checkbutton .mw.repeat.dayOfWeek.f1.radios.r1.tuesday -text Tuesday \
	 -relief flat -variable Tuesday -command updateNoday -takefocus 0] \
	[checkbutton .mw.repeat.dayOfWeek.f1.radios.r1.wednesday \
	 -text Wednesday -relief flat -variable Wednesday \
	 -command updateNoday -takefocus 0] -side left

    pack \
	[checkbutton .mw.repeat.dayOfWeek.f1.radios.r2.thursday -text Thursday \
	 -relief flat -variable Thursday -command updateNoday -takefocus 0] \
	[checkbutton .mw.repeat.dayOfWeek.f1.radios.r2.friday -text Friday \
	 -relief flat -variable Friday -command updateNoday -takefocus 0] \
	[checkbutton .mw.repeat.dayOfWeek.f1.radios.r2.saturday -text Saturday \
	 -relief flat -variable Saturday -command updateNoday -takefocus 0] \
	[checkbutton .mw.repeat.dayOfWeek.f1.radios.r2.any -text Any \
	 -relief flat -variable Noday -command enableNoday -takefocus 0] \
	-side left

    pack \
	 .mw.repeat.dayOfWeek.f1.radios.r1 \
	 .mw.repeat.dayOfWeek.f1.radios.r2 -side top

    pack \
	[label .mw.repeat.dayOfWeek.f1.l -text "Day of week"] \
	.mw.repeat.dayOfWeek.f1.radios -side left

    # Create the command (.mw.repeat.command)
    frame .mw.repeat.command -borderwidth 3
    pack \
	[label .mw.repeat.command.l -text "Command"] \
	[text .mw.repeat.command.t -relief sunken -borderwidth 2 \
	 -height 4 -width 60 -wrap char] -side left
    bind .mw.repeat.command.t <Return> {addEntry; break}
    bind .mw.repeat.command.t <Tab> {focus [tk_focusNext %W]; break}
    bind .mw.repeat.command.t <Shift-Tab> {focus [tk_focusPrev %W]; break}
    bind .mw.repeat.command.t <KeyRelease> {updateAddEntry; updateModifyEntry}
    bindtags .mw.repeat.command.t {.mw.repeat.command.t Text}

    # Add Emacs c-u binding on text widgets.
    bind Text <Control-u> {%W delete {insert linestart} {insert lineend}}

    pack .mw.repeat.minhour.f1
    pack .mw.repeat.dayOfMonth.f1
    pack .mw.repeat.month.f1
    pack .mw.repeat.dayOfWeek.f1
    pack .mw.repeat.command -side bottom

    pack \
	.mw.repeat.minhour \
	.mw.repeat.dayOfMonth \
	.mw.repeat.month \
	.mw.repeat.dayOfWeek -side top -anchor e

# Another vertical frame that will contain the list view (.mw.lv) and command
    frame .mw.lv -background blue
    frame .mw.lv.list
    frame .mw.lv.command -borderwidth 1

    # the buttons
    frame .mw.lv.list.f1
    button .mw.lv.list.f1.b1 -text Add -command addEntry \
	-state disabled -takefocus 0
    button .mw.lv.list.f1.b2 -text Remove -command removeEntry \
	-state disabled -takefocus 0
    button .mw.lv.list.f1.b3 -text Modify -command modifyEntry \
	-state disabled -takefocus 0
    pack .mw.lv.list.f1.b1 .mw.lv.list.f1.b2 \
	 .mw.lv.list.f1.b3 -side left -expand yes -fill x

    # create the listbox (.mw.lv.list.f2)
    frame .mw.lv.list.f2 -borderwidth 1 -relief raised
    pack [scrollbar .mw.lv.list.f2.xb -orient horizontal \
	  -command ".mw.lv.list.f2.lb xview" -takefocus 0] -side bottom -fill x
    pack [scrollbar .mw.lv.list.f2.yb -orient vertical \
	  -command ".mw.lv.list.f2.lb yview" -takefocus 0] -side right -fill y
    pack [listbox .mw.lv.list.f2.lb -width 60 -height 10 \
	  -xscrollcommand ".mw.lv.list.f2.xb set" \
	  -yscrollcommand ".mw.lv.list.f2.yb set" \
	  -exportselection false -selectmode single -takefocus 0] \
	-side left -fill both -expand true
    bind .mw.lv.list.f2.lb <ButtonRelease-1> \
	{displayCrontabEntry; updateAddEntry}

    # stack the 3 frames vertically
    pack .mw.lv.list.f1 -side bottom
    pack .mw.lv.list.f2
    pack .mw.lv.list

# And a horizontal one to hold the Action buttons (.mw.actions)
    frame .mw.actions
    pack \
	[button .mw.actions.clear -text "Clear gadgets" -takefocus 0 \
	 -command ".mw.lv.list.f2.lb selection clear 0 end; clearGadgets"] \
	[button .mw.actions.install -text "Install" -takefocus 0 \
	 -command installCrontab] \
	[button .mw.actions.getActive -text "Get active crontab" -takefocus 0 \
	 -command getCrontab] \
	[button .mw.actions.cancel -text "Cancel" -takefocus 0 \
	 -command cancelCrontab] \
	-side left -ipadx 3m -ipady 2m -padx 20 -expand yes

# Pack the three main frames
    pack .mw.actions -side bottom -pady 30
    pack .mw.lv -side top -pady 30
    pack .mw.repeat -side top -side top

# Focus on the first gadget
    focus .mw.repeat.minhour.f1.t2
}

frame .mw -borderwidth 2 -relief raised
wm title . "TkCron 2.12"
main
pack .mw
getCrontab

</pre>
</html>
