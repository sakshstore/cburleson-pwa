import { Component, h } from '@stencil/core';
import { isLocal, SITENAME } from '../../../helpers/utils';
import { BlogData } from '../../../services/blog-data';


@Component({
  tag: 'page-zbrush-keyboard-shortcuts',
})
export class PageZbrushKeyboardShortcuts {

  title = 'ZBrush Keyboard Shortcuts';

  header: any;

  async componentWillLoad() {
    if (isLocal()) {
      console.log('> PageZbrushKeyboardShortcuts.componentWillLoad');
    }

    let id = document.location.pathname.substr(1);
    this.header = BlogData.getPostHeaderById(id);

    document.title = this.header.title + ' | ' + SITENAME;
  }

  render() {
    return [
      <ion-header>
        <ion-toolbar color="primary">
          <ion-buttons slot="start">
            <ion-back-button defaultHref="/" />
          </ion-buttons>
          <ion-title>Blog</ion-title>
        </ion-toolbar>
      </ion-header>,

      <ion-content class="ion-padding">

        <ion-grid>
          <ion-row>
            <ion-col size-xs="12" size-sm="12" size-md="8" size-lg="8" size-xl="7">
              <h1>{this.title}</h1>

              <app-entry-meta header={this.header} />

              <p>My notes on ZBrush keyboard shortcuts (hotkeys) and control. This page is derived largely from the ZBrush Online Documentation, © 2020 by Pixologic, Inc. I have reproduced much of the <a href="http://docs.pixologic.com/user-guide/keyboard-shortcuts/" rel="nofollow">Keyboard Shortcut</a>&nbsp;documentation here for the purpose of personal study and with the hope of adding additional notes that may be helpful to others who, like me, are new to the software.</p>

              <h2>General shortcuts</h2>

              <table class="table table-bordered table-striped">
                <thead>
                  <tr>
                    <th>Action</th>
                    <th>Key(s)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Open Project</td>
                    <td><kbd>CTRL</kbd> + <kbd>O</kbd></td>
                  </tr>
                  <tr>
                    <td>Save Project</td>
                    <td><kbd>CTRL</kbd> + <kbd>S</kbd></td>
                  </tr>
                  <tr>
                    <td>Undo</td>
                    <td><kbd>CTRL</kbd> + <kbd>Z</kbd></td>
                  </tr>
                  <tr>
                    <td>Redo</td>
                    <td><kbd>SHIFT</kbd> + <kbd>CTRL</kbd> + <kbd>Z</kbd></td>
                  </tr>
                  <tr>
                    <td>Popup selection (on PC only)</td>
                    <td>
                      <ul>
                        <li>Tools &#8211; <kbd>F1</kbd></li>
                        <li>Brushes &#8211; <kbd>F2</kbd></li>
                        <li>Strokes &#8211; <kbd>F3</kbd></li>
                        <li>Alphas &#8211; <kbd>F4</kbd></li>
                        <li>Textures &#8211; <kbd>F5</kbd></li>
                        <li>Materials &#8211; <kbd>F6</kbd>&nbsp;(with cursor <strong>off</strong>&nbsp;canvas area)</li>
                      </ul>
                    </td>
                  </tr>
                  <tr>
                    <td>Show QuickMenu</td>
                    <td><kbd>SPACE</kbd> or right-click</td>
                  </tr>
                  <tr>
                    <td>Show/hide floating palettes</td>
                    <td><kbd>TAB</kbd></td>
                  </tr>
                  <tr>
                    <td>Show item description (when Popup Info is switched on)</td>
                    <td><kbd>CTRL</kbd> + cursor over item; When Popup Info is switched on.</td>
                  </tr>
                  <tr>
                    <td>Show alternative item description</td>
                    <td><kbd>CTRL</kbd> + <kbd>ALT</kbd> + cursor over item</td>
                  </tr>
                  <tr>
                    <td>Assign custom hotkey</td>
                    <td><kbd>CTRL</kbd>+ <kbd>ALT</kbd> + click on item; Stores&nbsp;hotkeys in Preferences &gt; Hotkeys submenu</td>
                  </tr>
                  <tr>
                    <td>Projection Master</td>
                    <td><kbd>G</kbd></td>
                  </tr>
                </tbody>
              </table>

              <h2>Lightbox and Spotlight</h2>

              <table class="table table-bordered table-striped">
                <thead>
                  <tr>
                    <th>Action</th>
                    <th>Key(s)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Show/hide Lightbox</td>
                    <td><kbd>,</kbd> (comma key)</td>
                  </tr>
                  <tr>
                    <td>load selected item</td>
                    <td>double-click on Lightbox thumbnail; Texture / Alphas will be loaded into Spotlight if it is active.</td>
                  </tr>
                  <tr>
                    <td>Turn on/off Spotlight</td>
                    <td><kbd>SHIFT</kbd> + <kbd>Z</kbd></td>
                  </tr>
                  <tr>
                    <td>Show/hide Spotlight Dial</td>
                    <td><kbd>Z</kbd></td>
                  </tr>
                </tbody>
              </table>

              <h2>Edit mode Navigation</h2>

              <p>with a 3D mesh in Edit mode...</p>

              <table class="table table-bordered table-striped">
                <tbody>
                  <tr>
                    <th>Action</th>
                    <th>Key(s)</th>
                  </tr>
                  <tr>
                    <td>Free Rotate</td>
                    <td>Click &amp; drag Background</td>
                  </tr>
                  <tr>
                    <td>Move</td>
                    <td><kbd>Alt</kbd> + Click &mp; drag Background</td>
                  </tr>
                  <tr>
                    <td>Constrain to 90-degree rotation</td>
                    <td>Click + drag, press <kbd>SHIFT</kbd></td>
                  </tr>
                  <tr>
                    <td>Scale</td>
                    <td><kbd>ALT</kbd> + Click, Release <kbd>ALT</kbd>, drag Background</td>
                  </tr>
                  <tr>
                    <td>Rotate around Z-axis</td>
                    <td><kbd>SHIFT</kbd>, Click, release <kbd>SHIFT</kbd>, drag</td>
                  </tr>
                </tbody>
              </table>

              (For best results turn off <styrong>RightClick Navigation</styrong> in the Preferences > Interface menu.)

              <h3>Right-Click Navigation</h3>

              <p>Turn on <strong>RightClick Navigation</strong>&nbsp;in the <strong>Preferences &gt; Interface</strong>&nbsp;menu.</p>

              <table class="table table-bordered table-striped">
                <tbody>
                  <tr>
                    <th>Action</th>
                    <th>Key(s)</th>
                  </tr>
                  <tr>
                    <td>Move</td>
                    <td><kbd>ALT</kbd> + right-click &amp; drag (can be over the model)</td>
                  </tr>
                  <tr>
                    <td>Scale</td>
                    <td><kbd>CTRL</kbd> + right-click &amp; drag (can be over the model)</td>
                  </tr>
                  <tr>
                    <td>Rotate</td>
                    <td>right-click &amp; drag (can be over the model)</td>
                  </tr>
                </tbody>
              </table>

              <h2>Transpose</h2>

              <ul>
                <li>With a 3D mesh in Edit mode, press <kbd>W</kbd> (Move), <kbd>E</kbd> (Scale), or <kbd>R</kbd> (Rotate), then
    click and drag to draw the orange action line.</li>
                <li>Click on the mesh to reposition the action line aligned to the surface normal.</li>
                <li>To align to an axis, click the end of the red, green or blue axis line.</li>
              </ul>

              <table class="table table-bordered table-striped">
                <thead>
                  <tr>
                    <th>Action</th>
                    <th>Key(s)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Move action line while drawing</td>
                    <td>Hold&nbsp;<kbd>SPACE</kbd></td>
                  </tr>
                  <tr>
                    <td>Move action line after drawing</td>
                    <td>click + drag&nbsp;orange line or center orange ring</td>
                  </tr>
                  <tr>
                    <td>Change action line end point position</td>
                    <td>click + drag orange end ring</td>
                  </tr>
                  <tr>
                    <td>Toggle between the Transpose line and Gizmo 3D</td>
                    <td><kbd>Y</kbd>; while in Move, Scale, or Rotate mode</td>
                  </tr>
                </tbody>
              </table>

              <p><em>Quick tip</em>: in Move/Scale mode, <kbd>ALT</kbd> + click + drag on the mesh (not on action line) to move or scale mesh</p>

              <h3>Inner (red/white) ring actions</h3>

              <p><em>These actions apply to the inner <strong>red</strong>&nbsp;or <strong>white</strong>&nbsp;rings of the action
    line. The terms <strong>center</strong>&nbsp;or <strong>end</strong>&nbsp;refer to the position on the
    line.</em></p>

              <table class="table table-bordered table-striped">
                <tbody>
                  <tr>
                    <th>Action</th>
                    <th>Key(s)</th>
                  </tr>
                  <tr>
                    <td colSpan={2}><strong>Move mode – <kbd>W</kbd></strong></td>
                  </tr>
                  <tr>
                    <td>Move</td>
                    <td>click + drag center</td>
                  </tr>
                  <tr>
                    <td>Duplicate mesh</td>
                    <td><kbd>CTRL</kbd> + click + drag center</td>
                  </tr>
                  <tr>
                    <td>Bend mesh</td>
                    <td><kbd>ALT</kbd> + click + drag center or end point</td>
                  </tr>
                  <tr>
                    <td>Stretch mesh</td>
                    <td>drag end point furthest from mesh</td>
                  </tr>
                  <tr>
                    <td>Flatten mesh</td>
                    <td>drag end point next to mesh</td>
                  </tr>
                  <tr>
                    <td>Inflate</td>
                    <td>right-click + drag end ring furthest from mesh</td>
                  </tr>
                  <tr>
                    <td>Create Edgeloop &amp; extrude</td>
                    <td>with partially masked mesh, hold <kbd>CTRL</kbd> and click + drag center point</td>
                  </tr>
                  <tr>
                    <td colSpan={2}><strong>Scale – <kbd>E</kbd><br /></strong></td>
                  </tr>
                  <tr>
                    <td>Scale</td>
                    <td>click + drag end point in line direction</td>
                  </tr>
                  <tr>
                    <td>Scale along axis</td>
                    <td>click + drag center point</td>
                  </tr>
                  <tr>
                    <td>Create Edgeloop and deflate / inflate</td>
                    <td>with partially masked mesh, hold <kbd>CTRL</kbd> and click + drag center point</td>
                  </tr>
                  <tr>
                    <td colSpan={2}><strong>Rotate – <kbd>R</kbd><br /></strong></td>
                  </tr>
                  <tr>
                    <td>Rotate around end point</td>
                    <td>click + drag other end point</td>
                  </tr>
                  <tr>
                    <td>Rotate around action line</td>
                    <td>click + drag center</td>
                  </tr>
                  <tr>
                    <td>Joint bend</td>
                    <td><kbd>ALT</kbd> + click + drag end point (rotation around same point)</td>
                  </tr>
                </tbody>
              </table>

              <h2>Sculpting and Painting</h2>

              <table class="table table-bordered table-striped">
                <thead>
                  <tr>
                    <th>Action</th>
                    <th>Key(s)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Draw Size</td>
                    <td><kbd>S</kbd></td>
                  </tr>
                  <tr>
                    <td>Focal Shift</td>
                    <td><kbd>O</kbd></td>
                  </tr>
                  <tr>
                    <td>RGB Intensity</td>
                    <td><kbd>I</kbd></td>
                  </tr>
                  <tr>
                    <td>Z Intensity</td>
                    <td><kbd>U</kbd></td>
                  </tr>
                  <tr>
                    <td>Increase Draw Size by set units</td>
                    <td><kbd>]</kbd>; set increment in the <strong>Zplugin &gt; Misc Utilities &gt; Brush Increment</strong>&nbsp;slider</td>
                  </tr>
                  <tr>
                    <td>Decrease Draw Size by set units</td>
                    <td><kbd>[</kbd>; set increment in the <strong>Zplugin &gt; Misc Utilities &gt;Brush Increment</strong>&nbsp;slider</td>
                  </tr>
                  <tr>
                    <td>Edit mode on/off</td>
                    <td><kbd>T</kbd></td>
                  </tr>
                  <tr>
                    <td>Draw</td>
                    <td><kbd>Q</kbd></td>
                  </tr>
                  <tr>
                    <td>Move</td>
                    <td><kbd>W</kbd></td>
                  </tr>
                  <tr>
                    <td>Scale</td>
                    <td><kbd>E</kbd></td>
                  </tr>
                  <tr>
                    <td>Rotate</td>
                    <td><kbd>R</kbd></td>
                  </tr>
                  <tr>
                    <td>Toggle ZAdd and ZSub</td>
                    <td><kbd>ALT</kbd>; While brushing on a model, hold down ALT to toggle from ZAdd to ZSub.</td>
                  </tr>
                </tbody>
              </table>

              <h3>Sculpting Brushes</h3>

              <p>Each brush has its own keyboard shortcut combo. You can learn them by pressing <kbd>B</kbd> to bring up the brush
palette, then a letter like <kbd>C</kbd> (to filter by all brushes starting with C), and then the letter
indicated in the top left of the brush icon in to brush palette. Following are some key combos for some common, but not all, brushes...</p>

              <table class="table table-bordered table-striped">
                <thead>
                  <tr>
                    <th>Action</th>
                    <th>Key Sequence</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Show Brush pop-up</td>
                    <td><kbd>B</kbd></td>
                  </tr>
                  <tr>
                    <td>Clay Buildup</td>
                    <td><kbd>B</kbd> - <kbd>C</kbd> - <kbd>D</kbd></td>
                  </tr>
                  <tr>
                    <td>ClayLine</td>
                    <td><kbd>B</kbd> - <kbd>C</kbd> - <kbd>L</kbd></td>
                  </tr>
                  <tr>
                    <td>ClipCurve</td>
                    <td><kbd>B</kbd> - <kbd>C</kbd> - <kbd>C</kbd></td>
                  </tr>
                  <tr>
                    <td>Damien Standard (dam std)</td>
                    <td><kbd>B</kbd> - <kbd>D</kbd> - <kbd>S</kbd></td>
                  </tr>
                  <tr>
                    <td>Inflate</td>
                    <td><kbd>B</kbd> - <kbd>I</kbd> - <kbd>N</kbd></td>
                  </tr>
                  <tr>
                    <td>Move</td>
                    <td><kbd>B</kbd> - <kbd>M</kbd> - <kbd>V</kbd></td>
                  </tr>
                  <tr>
                    <td>Move Elastic</td>
                    <td><kbd>B</kbd> - <kbd>M</kbd> - <kbd>E</kbd></td>
                  </tr>
                  <tr>
                    <td>MPolish</td>
                    <td><kbd>B</kbd> - <kbd>M</kbd> - <kbd>P</kbd></td>
                  </tr>
                  <tr>
                    <td>Smooth Stronger</td>
                    <td><kbd>B</kbd> - <kbd>S</kbd> - <kbd>S</kbd></td>
                  </tr>
                  <tr>
                    <td>Spiral</td>
                    <td><kbd>B</kbd> - <kbd>S</kbd> - <kbd>A</kbd>; Hold down ALT to spiral in the opposite direction.</td>
                  </tr>
                  <tr>
                    <td>Standard Brush</td>
                    <td><kbd>B</kbd> - <kbd>S</kbd> - <kbd>T</kbd></td>
                  </tr>
                  <tr>
                    <td>ZModeler</td>
                    <td><kbd>B</kbd> - <kbd>Z</kbd> - <kbd>M</kbd></td>
                  </tr>
                </tbody>
              </table>

              <h4>InsertMultiMesh brushes</h4>

              <table class="table table-bordered table-striped">
                <thead>
                  <tr>
                    <th>Action</th>
                    <th>Key(s)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Show all meshes in brush</td>
                    <td><kbd>M</kbd></td>
                  </tr>
                </tbody>
              </table>

              <h4>Changing the Brush hotkeys (pop-up palette)</h4>

              <p>Here is what you have to do:</p>

              <ul>
                <li>Press <kbd>B</kbd> to bring up the brush palette.</li>
                <li>Then click or press the letter that you want to narrow down to, in this example press <kbd>C</kbd>.</li>
                <li>With C selected all you will see is the brushes that start with C. You will see the next letter that selects
    the brush.</li>
                <li>At this point you can hold <kbd>CTRL</kbd> + <kbd>ALT</kbd> to change the shortcut to whatever you want by
    just clicking on the brush and then click your new shortcut.</li>
              </ul>

              <p><em>NOTE: Keep in mind that when you do this ZBrush automatically replaces the shortcut of another brush if you
    select a shortcut that is already assigned.</em></p>

              <h3>Color</h3>

              <table class="table table-bordered table-striped">
                <thead>
                  <tr>
                    <th>Action</th>
                    <th>Key(s)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Select Color under cursor</td>
                    <td><kbd>C</kbd></td>
                  </tr>
                  <tr>
                    <td>Switch Color</td>
                    <td><kbd>V</kbd></td>
                  </tr>
                </tbody>
              </table>

              <h3>Stroke</h3>

              <table class="table table-bordered table-striped">
                <thead>
                  <tr>
                    <th>Action</th>
                    <th>Key(s)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Lazy mouse</td>
                    <td><kbd>L</kbd>; Toggles the lazy mouse mode.</td>
                  </tr>
                  <tr>
                    <td>Replay Last Stroke</td>
                    <td><kbd>1</kbd>; This is very handy to use after pressing <kbd>CTRL</kbd>, and moving a subtool to duplicate it.
                        Pressing 1 will create yet another duplicate, moving it the same distance on the same axis as
            before. So, this is a great way to create an array of equally spaced duplicates.</td>
                  </tr>
                  <tr>
                    <td>Record Stroke</td>
                    <td><kbd>3</kbd></td>
                  </tr>
                  <tr>
                    <td>Replay All Recorded Strokes</td>
                    <td><kbd>2</kbd></td>
                  </tr>
                </tbody>
              </table>

              <h4>Curves</h4>

              <table class="table table-bordered table-striped">
                <thead>
                  <tr>
                    <th>Action</th>
                    <th>Key(s)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Smooth curve</td>
                    <td><kbd>6</kbd></td>
                  </tr>
                  <tr>
                    <td>Snapshot curve</td>
                    <td><kbd>5</kbd></td>
                  </tr>
                  <tr>
                    <td>Delete a curve</td>
                    <td><kbd>ALT</kbd> + draw across curve</td>
                  </tr>
                </tbody>
              </table>

              <h2>3D Models</h2>

              <table class="table table-bordered table-striped">
                <thead>
                  <tr>
                    <th>Action</th>
                    <th>Key(s)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Save Tool</td>
                    <td><kbd>SHIFT</kbd> + <kbd>CTRL</kbd> + <kbd>T</kbd></td>
                  </tr>
                  <tr>
                    <td>Frame (Fit Mesh To view)</td>
                    <td><kbd>F</kbd> (You may need to press it twice.)</td>
                  </tr>
                  <tr>
                    <td>Dynamic Persp (Perspective Distortion)</td>
                    <td><kbd>P</kbd></td>
                  </tr>
                  <tr>
                    <td>Floor Grid</td>
                    <td><kbd>SHIFT</kbd> + <kbd>P</kbd></td>
                  </tr>
                  <tr>
                    <td>Activate Symmetry</td>
                    <td><kbd>X</kbd></td>
                  </tr>
                  <tr>
                    <td>Show/hide Polyframe &amp; polygroups</td>
                    <td><kbd>SHIFT</kbd> + <kbd>F</kbd></td>
                  </tr>
                  <tr>
                    <td>Point Selection Mode</td>
                    <td><kbd>SHIFT</kbd> + <kbd>CTRL</kbd> + <kbd>P</kbd></td>
                  </tr>
                  <tr>
                    <td>Set Pivot Point</td>
                    <td><kbd>CTRL</kbd> + <kbd>P</kbd></td>
                  </tr>
                  <tr>
                    <td>Clear Pivot Point</td>
                    <td><kbd>SHIFT</kbd> + <kbd>P</kbd></td>
                  </tr>
                  <tr>
                    <td>Snapshot a version to canvas</td>
                    <td><kbd>SHIFT</kbd> + <kbd>S</kbd></td>
                  </tr>
                </tbody>
              </table>

              <h3>SubTools</h3>

              <table class="table table-bordered table-striped">
                <thead>
                  <tr>
                    <th>Action</th>
                    <th>Key(s)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>List all subtools</td>
                    <td><kbd>N</kbd></td>
                  </tr>
                  <tr>
                    <td>Select SubTool</td>
                    <td><kbd>ALT</kbd> + <strong>click</strong>&nbsp;on SubTool</td>
                  </tr>
                  <tr>
                    <td>Frame SubTool</td>
                    <td><kbd>SHIFT</kbd> + <kbd>ALT</kbd> + <strong>click</strong>&nbsp;on selected SubTool; <em>Note this option can be set in the <strong>Preferences &gt; Edit &gt; Enable Auto
                    Center</strong>&nbsp;slider; 0 = off; 1 = Alt + click; 2 = <kbd>SHIFT</kbd> + <kbd>Alt</kbd>
                      + click</em></td>
                  </tr>
                  <tr>
                    <td>Toggle Polypaint Colorize</td>
                    <td>Click on paintbrush icon</td>
                  </tr>
                  <tr>
                    <td>Toggle Polypaint Colorize for all SubTools</td>
                    <td><kbd>SHIFT</kbd> + click on paintbrush icon</td>
                  </tr>
                </tbody>
              </table>

              <h3>Geometry</h3>

              <table class="table table-bordered table-striped">
                <thead>
                  <tr>
                    <th>Action</th>
                    <th>Key(s)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Divide</td>
                    <td><kbd>CTRL</kbd> + <kbd>D</kbd></td>
                  </tr>
                  <tr>
                    <td>Lower Res</td>
                    <td><kbd>SHIFT</kbd> + <kbd>D</kbd></td>
                  </tr>
                  <tr>
                    <td>Higher Res</td>
                    <td><kbd>D</kbd></td>
                  </tr>
                  <tr>
                    <td>Edge Loop</td>
                    <td><kbd>CTRL</kbd> + <kbd>E</kbd> (partially hidden mesh)</td>
                  </tr>
                </tbody>
              </table>

              <h3>Dynamesh</h3>

              <p>Remesh Dynamesh sculpt &#8211; in Edit &gt; Draw mode <strong><kbd>CTRL</kbd> + drag Background</strong></p>

              <h3>HD Geometry</h3>

              <table class="table table-bordered table-striped">
                <thead>
                  <tr>
                    <th>Action</th>
                    <th>Key(s)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Toggle in/out of HD Sculpting mode</td>
                    <td><kbd>A</kbd> (cursor over mesh)</td>
                  </tr>
                  <tr>
                    <td>Render all HD Geometry</td>
                    <td><kbd>A</kbd> (cursor over background)</td>
                  </tr>
                </tbody>
              </table>

              <h3>Masking</h3>

              <table class="table table-bordered table-striped">
                <thead>
                  <tr>
                    <th>Action</th>
                    <th>Key(s)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>View mask</td>
                    <td><kbd>CTRL</kbd> + <kbd>H</kbd></td>
                  </tr>
                  <tr>
                    <td>Invert mask</td>
                    <td><kbd>CTRL</kbd> + <kbd>I</kbd></td>
                  </tr>
                  <tr>
                    <td>Mask all</td>
                    <td><kbd>CTRL</kbd> + <kbd>A</kbd></td>
                  </tr>
                  <tr>
                    <td>Select masking Brush</td>
                    <td>hold <kbd>CTRL</kbd>&nbsp;while selecting brush from popup</td>
                  </tr>
                  <tr>
                    <td>Paint mask on object (alphas/strokes can be used)</td>
                    <td><kbd>CTRL</kbd> (hold down)</td>
                  </tr>
                  <tr>
                    <td>Delete or paint reverse mask</td>
                    <td><kbd>CTRL</kbd> + <kbd>ALT</kbd> (hold down)</td>
                  </tr>
                  <tr>
                    <td>Reverse mask (a.k.a. Flip Mask, Invert Mask)</td>
                    <td><kbd>CTRL</kbd> + click background</td>
                  </tr>
                  <tr>
                    <td>Clear mask</td>
                    <td><kbd>CTRL</kbd> + click + drag background</td>
                  </tr>
                  <tr>
                    <td>Constant-intensity mask</td>
                    <td><kbd>CTRL</kbd> + click, release <kbd>CTRL</kbd>, drag (starting off mesh)</td>
                  </tr>
                  <tr>
                    <td>Alpha-intensity mask (using MaskPen or MaskRect brush)</td>
                    <td><kbd>CTRL</kbd> + click &amp; drag (select alpha while holding <kbd>CTRL</kbd>)</td>
                  </tr>
                  <tr>
                    <td>Blur mask</td>
                    <td><kbd>CTRL</kbd> + click on mesh; When a mask has been drawn on a mesh, this action blurs (softens) the edges of the mask.</td>
                  </tr>
                  <tr>
                    <td>Sharpen mask</td>
                    <td><kbd>CTRL</kbd> + <kbd>ALT</kbd> + click on mesh</td>
                  </tr>
                </tbody>
              </table>

              <h3>Topological Masking</h3>

              <p>in Move, Scale or Rotate mode &#8211; <kbd>CTRL</kbd> + click + drag the action line&nbsp;on the model</p>

              <h3>Polygroups</h3>

              <table class="table table-bordered table-striped">
                <thead>
                  <tr>
                    <th>Action</th>
                    <th>Key(s)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Group Masked and Clear Mask</td>
                    <td><kbd>CTRL</kbd> + <kbd>W</kbd><br />(This is super handy! Basically, it turns anything you have masked into a polygroup and then clears the mask. In other words, if you want to turn the currently masked area into a polygroup, press <kbd>CTRL</kbd> + <kbd>W</kbd>.)</td>
                  </tr>
                  <tr>
                    <td>Make all polygroups into one</td>
                    <td><kbd>CTRL</kbd> + <kbd>W</kbd><br />(Applies a single polygroup to the active subtool; if a subtool has several polygroups and you want only one, for example)</td>
                  </tr>
                </tbody>
              </table>

              <h3>Partial Mesh Visibility &amp; Clip Brushes</h3>

              <table class="table table-bordered table-striped">
                <thead>
                  <tr>
                    <th>Action</th>
                    <th>Key(s)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Select Selection or Clip Brush</td>
                    <td>hold <kbd>SHIFT</kbd> + <kbd>CTRL</kbd> while selecting brush from popup</td>
                  </tr>
                  <tr>
                    <td>Show mesh portion</td>
                    <td><kbd>SHIFT</kbd> + <kbd>CTRL</kbd> + click, release keys &amp; drag (green selection area)</td>
                  </tr>
                  <tr>
                    <td>Hide mesh portion</td>
                    <td><kbd>SHIFT</kbd> + <kbd>CTRL</kbd> + click, release keys &amp; drag &#8211; press Alt (red selection area)</td>
                  </tr>
                  <tr>
                    <td>Grow mesh portion</td>
                    <td><kbd>CTRL</kbd> + <kbd>SHIFT</kbd> + <kbd>X</kbd></td>
                  </tr>
                  <tr>
                    <td>Shrink mesh portion</td>
                    <td><kbd>CTRL</kbd> + <kbd>SHIFT</kbd> + <kbd>S</kbd></td>
                  </tr>
                  <tr>
                    <td>Grow all mesh portion</td>
                    <td><kbd>CTRL</kbd> + <kbd>SHIFT</kbd> + <kbd>A</kbd></td>
                  </tr>
                  <tr>
                    <td>Outer Ring visibility</td>
                    <td><kbd>CTRL</kbd> + <kbd>SHIFT</kbd> + <kbd>O</kbd></td>
                  </tr>
                  <tr>
                    <td>Move selection or clip area</td>
                    <td>press <kbd>SPACE</kbd> without releasing mouse/pen</td>
                  </tr>
                  <tr>
                    <td>Show entire mesh</td>
                    <td><kbd>SHIFT</kbd> + <kbd>CTRL</kbd> + click background</td>
                  </tr>
                  <tr>
                    <td>Show only selected Polygroup (on fully visible mesh)</td>
                    <td><kbd>SHIFT</kbd> + <kbd>CTRL</kbd> + click</td>
                  </tr>
                  <tr>
                    <td>Hide selected Polygroup (on fully visible mesh)</td>
                    <td><kbd>SHIFT</kbd> + <kbd>CTRL</kbd> + click twice</td>
                  </tr>
                  <tr>
                    <td>Hide selected Polygroup (on partially visible mesh)</td>
                    <td><kbd>SHIFT</kbd> + <kbd>CTRL</kbd> + click</td>
                  </tr>
                  <tr>
                    <td>Reverse visibility</td>
                    <td><kbd>SHIFT</kbd> + <kbd>CTRL</kbd> + click &amp; drag background</td>
                  </tr>
                  <tr>
                    <td>Hide edge loop</td>
                    <td>with Lasso option selected, <kbd>SHIFT</kbd> + <kbd>CTRL</kbd> + click on edge that crosses loop</td>
                  </tr>
                  <tr>
                    <td>ClipCurve add soft direction change</td>
                    <td>press <kbd>ALT</kbd> once</td>
                  </tr>
                  <tr>
                    <td>ClipCurve add sharp direction change</td>
                    <td>press <kbd>ALT</kbd> twice</td>
                  </tr>
                  <tr>
                    <td>reverse clip area</td>
                    <td><kbd>ALT</kbd> (hold down)</td>
                  </tr>
                </tbody>
              </table>

              <h3>Stencil</h3>

              <table class="table table-bordered table-striped">
                <thead>
                  <tr>
                    <th>Action</th>
                    <th>Key(s)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Stencil On</td>
                    <td><kbd>ALT</kbd> + <kbd>H</kbd></td>
                  </tr>
                  <tr>
                    <td>Hide/Show Stencil</td>
                    <td><kbd>CTRL</kbd> + <kbd>H</kbd></td>
                  </tr>
                  <tr>
                    <td>Coin Controller</td>
                    <td><kbd>SPACE</kbd></td>
                  </tr>
                </tbody>
              </table>

              <h2>ZSpheres</h2>

              <table class="table table-bordered table-striped">
                <thead>
                  <tr>
                    <th>Action</th>
                    <th>Key(s)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Preview Adaptive Skin</td>
                    <td><kbd>A</kbd></td>
                  </tr>
                </tbody>
              </table>

              <h3>ZSpheres &#8211; Draw mode</h3>

              <table class="table table-bordered table-striped">
                <thead>
                  <tr>
                    <th>Action</th>
                    <th>Key(s)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Add a child ZSphere</td>
                    <td>drag ZSphere</td>
                  </tr>
                  <tr>
                    <td>Delete ZSphere</td>
                    <td><kbd>ALT</kbd> + click ZSphere</td>
                  </tr>
                  <tr>
                    <td>Add a child ZSphere at same size</td>
                    <td>click + drag, press <kbd>SHIFT</kbd></td>
                  </tr>
                  <tr>
                    <td>Add a child ZSphere and scale Link Spheres</td>
                    <td>click + drag to size new ZSphere, press <kbd>CTRL</kbd> + drag</td>
                  </tr>
                  <tr>
                    <td>Insert ZSphere</td>
                    <td>click Link-Sphere</td>
                  </tr>
                  <tr>
                    <td>Sphere Define magnet/ break meshio</td>
                    <td><kbd>ALT</kbd> + click Link-Sphere (with Tool &gt; Adaptive Skin &gt; Use ClassicSkinning on)</td>
                  </tr>
                </tbody>
              </table>

              <h3>ZSpheres &#8211; Move mode</h3>

              <table class="table table-bordered table-striped">
                <thead>
                  <tr>
                    <th>Action</th>
                    <th>Key(s)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Move ZSphere</td>
                    <td>drag ZSphere</td>
                  </tr>
                  <tr>
                    <td>Pose (Natural-linked move)</td>
                    <td>drag Link-Sphere</td>
                  </tr>
                  <tr>
                    <td>Move Chain</td>
                    <td><kbd>Alt</kbd> + drag Link-Sphere</td>
                  </tr>
                </tbody>
              </table>

              <h3>ZSpheres &#8211; Scale mode</h3>

              <table class="table table-bordered table-striped">
                <thead>
                  <tr>
                    <th>Action</th>
                    <th>Key(s)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Scale Zsphere</td>
                    <td>drag ZSphere</td>
                  </tr>
                  <tr>
                    <td>Inflate/deflate chain</td>
                    <td><kbd>ALT</kbd> + drag Link-Sphere</td>
                  </tr>
                  <tr>
                    <td>Scale chain</td>
                    <td>drag Link-Sphere</td>
                  </tr>
                </tbody>
              </table>

              <h3>ZSpheres &#8211; Rotate mode</h3>

              <table class="table table-bordered table-striped">
                <thead>
                  <tr>
                    <th>Action</th>
                    <th>Key(s)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Spin chain</td>
                    <td>drag ZSphere</td>
                  </tr>
                  <tr>
                    <td>Control twist</td>
                    <td><kbd>ALT</kbd> + drag Link-Sphere</td>
                  </tr>
                  <tr>
                    <td>Rotate chain</td>
                    <td>drag Link-Sphere</td>
                  </tr>
                </tbody>
              </table>

              <h3>ZSpheres &#8211; ZSketch</h3>

              <table class="table table-bordered table-striped">
                <thead>
                  <tr>
                    <th>Action</th>
                    <th>Key(s)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Activate ZSketch Edit mode</td>
                    <td><kbd>SHIFT</kbd> + <kbd>A</kbd> (with a ZSphere armature in Edit mode)</td>
                  </tr>
                  <tr>
                    <td>Preview Unified Skin</td>
                    <td><kbd>A</kbd></td>
                  </tr>
                </tbody>
              </table>

              <h2>Canvas and 2.5D</h2>

              <table class="table table-bordered table-striped">
                <thead>
                  <tr>
                    <th>Action</th>
                    <th>Key(s)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Reverse 2.5D brush effect</td>
                    <td><kbd>ALT</kbd> (hold down)</td>
                  </tr>
                  <tr>
                    <td>Crop And Fill</td>
                    <td><kbd>SHIFT</kbd> + <kbd>CTRL</kbd> + <kbd>F</kbd></td>
                  </tr>
                  <tr>
                    <td>Grab Texture From Document</td>
                    <td><kbd>SHIFT</kbd> + <kbd>CTRL</kbd> + <kbd>G</kbd></td>
                  </tr>
                </tbody>
              </table>

              <h3>Document Layers</h3>

              <table class="table table-bordered table-striped">
                <thead>
                  <tr>
                    <th>Action</th>
                    <th>Key(s)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Clear Layer</td>
                    <td><kbd>CTRL</kbd> + <kbd>N</kbd></td>
                  </tr>
                  <tr>
                    <td>Fill Layer</td>
                    <td><kbd>CTRL</kbd> + <kbd>F</kbd></td>
                  </tr>
                  <tr>
                    <td>Bake Layer</td>
                    <td><kbd>CTRL</kbd> + <kbd>B</kbd></td>
                  </tr>
                  <tr>
                    <td>On Layer thumbnail, toggle all layers on/off</td>
                    <td><kbd>SHIFT</kbd> + CLICK</td>
                  </tr>
                  <tr>
                    <td>Select layer on which clicked pixol resides</td>
                    <td><kbd>~</kbd> + click canvas (US) <kbd>@</kbd> + click canvas (UK)</td>
                  </tr>
                  <tr>
                    <td>Move layer contents up/down/sideways (X &amp; Y)</td>
                    <td><kbd>~</kbd> + drag (US) <kbd>@</kbd> + drag (UK)</td>
                  </tr>
                </tbody>
              </table>

              <h3>Markers</h3>

              <p>Markers will only show when Edit is turned off</p>

              <table class="table table-bordered table-striped">
                <thead>
                  <tr>
                    <th>Action</th>
                    <th>Key(s)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Remove Marker</td>
                    <td><kbd>CTRL</kbd> + <kbd>M</kbd></td>
                  </tr>
                </tbody>
              </table>

              <h3>Canvas Zoom</h3>

              <table class="table table-bordered table-striped">
                <thead>
                  <tr>
                    <th>Action</th>
                    <th>Key(s)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Actual Size</td>
                    <td><kbd>0</kbd></td>
                  </tr>
                  <tr>
                    <td>Antialiased Half Size</td>
                    <td><kbd>CTRL</kbd> + <kbd>0</kbd></td>
                  </tr>
                  <tr>
                    <td>Zoom In</td>
                    <td><kbd>+</kbd> (plus sign)</td>
                  </tr>
                  <tr>
                    <td>Zoom Out</td>
                    <td><kbd>-</kbd> (minus sign)</td>
                  </tr>
                </tbody>
              </table>

              <h2>Timeline</h2>

              <table class="table table-bordered table-striped">
                <thead>
                  <tr>
                    <th>Action</th>
                    <th>Key(s)</th>

                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Place a new key frame</td>
                    <td>click on the Timeline</td>
                  </tr>
                  <tr>
                    <td>Select an existing key frame</td>
                    <td>click on the key frame dot</td>
                  </tr>
                  <tr>
                    <td>Zoom Timeline in/out</td>
                    <td>click on selected key frame dot</td>
                  </tr>
                  <tr>
                    <td>Move selected key frame</td>
                    <td>click + drag dot to new position (dragging off end will delete)</td>
                  </tr>
                  <tr>
                    <td>Store new data in existing key frame</td>
                    <td><kbd>SHIFT</kbd> + <kbd>CTRL</kbd> + click on the key frame dot</td>
                  </tr>
                  <tr>
                    <td>Delete a key frame</td>
                    <td>click + drag dot off the Timeline</td>
                  </tr>
                  <tr>
                    <td>Copy selected key frame</td>
                    <td><kbd>SHIFT</kbd> + click on the Timeline at the point where you want the copy</td>
                  </tr>
                  <tr>
                    <td>Copy multiple key frames</td>
                    <td><kbd>SHIFT</kbd> + click on all the key frames dots to be copied, then <kbd>SHIFT</kbd> + click the
            Timeline (at the point where you want the copies)</td>
                  </tr>
                  <tr>
                    <td>Create Transition key frame</td>
                    <td><kbd>CTRL</kbd> + click on an existing key frame dot</td>
                  </tr>
                  <tr>
                    <td>Create Rigid key frame</td>
                    <td><kbd>ALT</kbd> + click on an existing key frame dot</td>
                  </tr>
                  <tr>
                    <td>Go to Previous Camera key frame</td>
                    <td>LEFT ARROW</td>
                  </tr>
                  <tr>
                    <td>Go to Next Camera key frame</td>
                    <td>RIGHT ARROW</td>
                  </tr>
                  <tr>
                    <td>Play the Timeline</td>
                    <td><kbd>SHIFT</kbd>+click on the Timeline cursor (will play as a loop)</td>
                  </tr>
                  <tr>
                    <td>Stop the Timeline playing</td>
                    <td><kbd>ESC</kbd></td>
                  </tr>
                  <tr>
                    <td>Record Timeline as a Movie</td>
                    <td><kbd>SHIFT</kbd> + <kbd>CTRL</kbd> + click on the Timeline cursor (set the cursor to the start first using the LEFT ARROW)</td>
                  </tr>
                </tbody>
              </table>

              <h3>Movie</h3>

              <table class="table table-bordered table-striped">
                <thead>
                  <tr>
                    <th>Action</th>
                    <th>Key(s)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Snapshot to Movie</td>
                    <td><kbd>CTRL</kbd> + <kbd>SHIFT</kbd> + ! (US) <kbd>SHIFT</kbd> + <kbd>CTRL</kbd> + PageUp (UK)</td>
                  </tr>
                </tbody>
              </table>

              <h2>Render</h2>

              <table class="table table-bordered table-striped">
                <thead>
                  <tr>
                    <th>Action</th>
                    <th>Key(s)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Best Preview Render (BPR)</td>
                    <td><kbd>SHIFT</kbd> + <kbd>R</kbd></td>
                  </tr>
                  <tr>
                    <td>Render All</td>
                    <td><kbd>SHIFT</kbd> + <kbd>CTRL</kbd> + <kbd>R</kbd></td>
                  </tr>
                  <tr>
                    <td>Cursor Selective Render</td>
                    <td><kbd>CTRL</kbd> + <kbd>R</kbd></td>
                  </tr>
                </tbody>
              </table>

              <h2>Custom UI and Configuration</h2>

              <table class="table table-bordered table-striped">
                <thead>
                  <tr>
                    <th>Action</th>
                    <th>Key(s)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Move item to custom interface position</td>
                    <td><kbd>CTRL</kbd> + <kbd>ALT</kbd> + drag (when <em>Enable Customize</em> is on)</td>
                  </tr>
                  <tr>
                    <td>Remove item from custom interface position</td>
                    <td><kbd>CTRL</kbd> + <kbd>ALT</kbd> + drag to Canvas (when <em>Enable Customize</em> is on)</td>
                  </tr>
                  <tr>
                    <td>Store Configuration File</td>
                    <td><kbd>SHIFT</kbd> + <kbd>CTRL</kbd> + <kbd>I</kbd></td>
                  </tr>
                  <tr>
                    <td>Load User Interface Configuration File</td>
                    <td><kbd>CTRL</kbd> + <kbd>L</kbd></td>
                  </tr>
                  <tr>
                    <td>Save User Interface Configuration File</td>
                    <td><kbd>SHIFT</kbd> + <kbd>CTRL</kbd> + <kbd>ALT</kbd> + <kbd>I</kbd></td>
                  </tr>
                </tbody>
              </table>

              <h2>ZScripts</h2>

              <table class="table table-bordered table-striped">
                <thead>
                  <tr>
                    <th>Action</th>
                    <th>Keys</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Load ZScript</td>
                    <td><kbd>SHIFT</kbd> + <kbd>CTRL</kbd> + <kbd>L</kbd></td>
                  </tr>
                  <tr>
                    <td>Reload ZScript</td>
                    <td><kbd>CTRL</kbd> + <kbd>U</kbd></td>
                  </tr>
                  <tr>
                    <td>Show/Hide ZScript window</td>
                    <td><kbd>H</kbd></td>
                  </tr>
                </tbody>
              </table>

              <h2>Reference Resources</h2>

              <ul>
                <li><a href="http://docs.pixologic.com/user-guide/keyboard-shortcuts/shortcuts-by-category/"
                  rel="nofollow">Shortcuts by Category</a>, ZBrush 4Online Documentation</li>
              </ul>

            </ion-col>
            <ion-col size-xs="12" size-sm="12" size-md="4" size-lg="4" size-xl="5">
               <gls-adsense-ad />
            </ion-col>
          </ion-row>
        </ion-grid>

      </ion-content>

    ];
  }
}